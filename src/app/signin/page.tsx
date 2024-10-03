import { redirect } from "next/navigation"

import { signIn } from "@/auth"
import { CredentialsSignin } from "next-auth"

import { InputLabel } from "@/components/ui/input-label"
import { Button } from "@/components/ui/button"

export default async function SignInPage(props: {
    searchParams: { callbackUrl: string | undefined }
}) {
    return (
        <form
            className="flex flex-col gap-2 max-w-md ml-auto mr-auto mt-10"
            action={async (formData) => {
                "use server"
                try {
                    await signIn("credentials", formData);
                } catch (error) {
                    if (error instanceof CredentialsSignin) {
                        return redirect(`/error?code=${error.code}`)
                    }

                    throw error
                } finally {
                    redirect("/")
                }
            }}
        >
            <InputLabel placeholder="Email" id="email" type="email" name="email" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" />
            <InputLabel placeholder="Password" id="password" type="password" name="password" required />
            
            <Button type="submit">Sign In</Button>
        </form>
    )
}