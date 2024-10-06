"use client"

import { useFormState } from "react-dom"
import { login } from "@/actions/login"

import { InputLabel } from "@/components/ui/input-label"
import SubmitButton from "@/components/submit-button"

export default function SignInPage() {
    const [state, action] = useFormState(login, { success: true, message: "" })
    return (
        <form
            className="flex flex-col gap-2 max-w-md ml-auto mr-auto mt-10 border-input border rounded-xl p-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[400px] min-h-[300px]"
            action={action}
        >
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-m mb-4">If you don't have an account yet, you will be automatically registered.</p>

            <InputLabel placeholder="Email" id="email" type="email" name="email" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" />
            <InputLabel placeholder="Password" id="password" type="password" name="password" required />

            {state && state.message && <p className={state.success ? "text-green-600" : "text-red-600"}>{state.message}</p>}

            <SubmitButton text="Sign In" loadingText="Signing In..." />
        </form>
    )
}