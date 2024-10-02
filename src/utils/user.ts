import { verifyPassword, saltAndHashPassword } from "./password";

import User from "@/models/user";

export async function loginUser(email: string, password: string): Promise<{ state: "success" | "notfound" | "wrongpassword", user?: any }> {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return { state: "notfound" };
        }
        
        if (await verifyPassword(password, user.password)) {
            return { state: "success", user: user };
        } else {
            return { state: "wrongpassword" };
        }
    } catch (error) {
        return { state: "notfound" };
    }
}

export async function registerUser(email: string, password: string) {
    const pwHash = await saltAndHashPassword(password);
    try {
        const user = await User.create({ email, password: pwHash });
        return user;
    } catch (error) {
        return null;
    }
}