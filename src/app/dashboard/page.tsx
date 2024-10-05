import { redirect } from "next/navigation";
import { auth } from "@/auth";

import UploadForm from "@/components/uploadForm";
import Capsule from "@/components/capsule";
import { getAllCapsules } from "@/lib/capsule";
import { NoCapsulesPage } from "@/components/no-capsules";
import { DatetimePicker } from "@/components/datetime-picker";

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
            <div className="flex justify-between w-full">
                <h1 className="text-2xl font-bold mb-4">My Time Capsules</h1>
                <UploadForm />
            </div>

            {capsules.length === 0 && (
                <NoCapsulesPage />
            )}

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capsules.map((capsule) => (
                    <li key={capsule.id} className="col-span-1 h-[180px]">
                        <Capsule data={capsule} />
                    </li>
                ))}
            </ul>
        </div>
    );
}