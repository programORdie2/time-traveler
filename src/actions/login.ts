"use server";

import { redirect } from "next/navigation"

import { signIn } from "@/auth"

export async function login(prevState: any, formData: FormData) {
    let isSuccess = false;
    try {
        const data = {
            email: formData.get("email")?.toString() ?? "",
            password: formData.get("password")?.toString() ?? "",
        }
        await signIn("credentials", { redirect: false, ...data });

        isSuccess = true;
    } finally {
        if (isSuccess) {
            redirect("/");
            return { success: true, message: "Login successful, redirecting..." };
        }

        return { success: false, message: "Failed to login, please try again" };
    }
}