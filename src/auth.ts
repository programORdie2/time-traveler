import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { loginUser, registerUser } from "@/utils/db";
import { signInSchema } from "@/lib/zod";

class InvalidLoginError extends CredentialsSignin {
    code = "Invalid identifier or password"
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials: any) => {
                let email, password;
                try {
                    const { email: _email, password: _password } = await signInSchema.parseAsync(credentials);
                    email = _email;
                    password = _password;
                } catch (error) {
                    throw new InvalidLoginError()
                }

                // logic to verify if the user exists
                const { state, user } = await loginUser(email, password);

                if (state === "success") {
                    return user
                }

                if (state === "wrongpassword") {
                    throw new InvalidLoginError()
                }

                if (state === "notfound") {
                    const newUser = await registerUser(email, password);
                    if (newUser) {
                        return newUser
                    }

                    throw new InvalidLoginError()
                }

                return false;
            },
        }),
    ],
})