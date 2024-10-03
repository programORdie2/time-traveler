import { redirect } from "next/navigation";
import { auth } from "@/auth";

import UploadForm from "@/components/uploadForm";
import Capsule from "@/components/capsule";
import { getAllCapsules } from "@/utils/capsule";

export default async function Dashboard() {
    const user = await auth();
    if (!user?.user) {
        redirect("/signin");
    }

    let capsules = await getAllCapsules(user?.user?.email!);
    // Sort our capsules by unlock date
    capsules = capsules.sort((a, b) => {
        return new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime();
    });

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">My Time Capsules</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capsules.map((capsule) => (
                    <li key={capsule.id} className="col-span-1">
                        <Capsule data={capsule} />
                    </li>
                ))}
            </ul>

            <div className="mt-8">
                <h1 className="text-2xl font-bold mb-4">Create New Capsule</h1>
                <UploadForm />
            </div>
        </div>
    );
}