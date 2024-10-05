"use client"

import { InputLabel } from "@/components/ui/input-label"
import { Button } from "@/components/ui/button"

import { useFormState } from "react-dom"
import { login } from "@/actions/login"
import SubmitButton from "@/components/submit-button"

export default async function SignInPage(props: {
    searchParams: { callbackUrl: string | undefined }
}) {
    const [state, action] = useFormState(login, { success: true, message: "" })
    return (
        <form
            className="flex flex-col gap-2 max-w-md ml-auto mr-auto mt-10"
            action={action}
        >
            <InputLabel placeholder="Email" id="email" type="email" name="email" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" />
            <InputLabel placeholder="Password" id="password" type="password" name="password" required />
            
            {state && state.message && <p className={state.success ? "text-green-600" : "text-red-600"}>{state.message}</p>}

            <SubmitButton text="Sign In" loadingText="Signing In..." />
        </form>
    )
}