import { redirect } from "next/navigation";
import { auth } from "@/auth";

import UploadForm from "@/components/upload-form";
import Capsules from "./capsules";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Time Capsules",
    description: "Upload time capsules and open them again later.",
    robots: { index: true, follow: true },
    openGraph: {
        title: "My Time Capsules",
        description: "Upload time capsules and open them again later."
    },
    twitter: {
        card: "summary_large_image",
        title: "My Time Capsules",
        description: "Upload time capsules and open them again later."
    }
}

export default async function Dashboard() {
    const user = await auth();
    if (!user?.user) {
        redirect("/");
    }

    return (
        <div className="p-8">
            <div className="flex justify-between w-full">
                <h1 className="text-2xl font-bold mb-4">My Time Capsules</h1>
                <UploadForm />
            </div>

            <Capsules user={user} />
        </div>
    );
}