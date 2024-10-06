import { redirect } from "next/navigation";
import { auth } from "@/auth";

import { getCapsule } from "@/lib/capsule";
import { getFiles } from "@/utils/upload";
import prettyTimeLeft from "@/utils/prettyTime";

import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";

import Files from "@/components/files";
import CapsuleMeta from "@/components/capsule-meta";

import { ClockIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function CapsulePage({ params }: { params: { id: string } }) {
    const user = await auth();

    if (!user?.user) {
        redirect("/signin");
    }

    const capsule = await getCapsule(params.id, user?.user?.email!);
    if (!capsule) {
        return (
            <div>
                <h1>Time Capsule not found</h1>
            </div>
        )
    }
    const unlockDateLocal = new Date(capsule.unlockDate);
    const isUnlocked = Date.now() > unlockDateLocal.getTime();

    const fileUrls = !isUnlocked ? {} : await getFiles(capsule.files.map((file: { cid: string }) => file.cid));

    return (
        <div className="w-full h-full">
            <div className="pt-4 pl-4 pr-4 w-full flex justify-between">
                <Button variant="ghost"><Link href="/dashboard" className="text-gray-500" title="Back">&lt; Back</Link></Button>
                <DeleteButton id={capsule.id} />
            </div>
            <div className="p-8 pt-4">
                <CapsuleMeta capsule={capsule} />
                {isUnlocked ? (
                    <Files files={capsule.files} urls={fileUrls} />
                ) : (
                    <p className="text-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><ClockIcon className="w-6 h-6 inline" /> Unlocks in {prettyTimeLeft(unlockDateLocal)}</p>
                )}
            </div>
        </div>
    );
}