import { Metadata } from "next";
import SignInPage from "./form";

export const metadata: Metadata = {
    title: "Sign In to Time Capsules",
    description: "Sign In to your account to upload time capsules and open them again later.",
    robots: { index: true, follow: true },
}

export default function SignIn() {
    return (
        <SignInPage />
    );
}