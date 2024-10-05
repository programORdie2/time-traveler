import { redirect } from "next/navigation";
import { auth } from "@/auth";

import UploadForm from "@/components/uploadForm";
import Capsules from "./capsules";

export default async function Dashboard() {
    const user = await auth();
    if (!user?.user) {
        redirect("/signin");
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