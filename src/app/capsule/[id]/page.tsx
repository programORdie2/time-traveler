import { redirect } from "next/navigation";
import { auth } from "@/auth";

import { getCapsule } from "@/lib/capsule";
import { getFiles } from "@/utils/upload";
import { FilePreview } from "@/components/file-card";
import { DeleteButton } from "@/components/delete-button";
import Link from "next/link";
import { ClockIcon } from "@radix-ui/react-icons";

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
    const unclockDateLocal = new Date(capsule.unlockDate);
    const isUnlocked = Date.now() > unclockDateLocal.getTime();

    const fileUrls = !isUnlocked ? {} : await getFiles(capsule.files.map((file: { cid: string }) => file.cid));

    return (
        <div className="w-full h-full">
            <div className="pt-4 pl-4 pr-4 w-full flex justify-between">
                <Link href="/dashboard" className="text-gray-500" title="Back">&lt; Back</Link>
                <DeleteButton id={capsule.id} />
            </div>
            <div className="p-8 pt-4">
                <h1 className="text-3xl font-bold">{capsule.name}</h1>
                <p className="text-xl mb-0">{capsule.description}</p>
                <span className="text-gray-600 mb-1">{`${capsule.files.length} ${capsule.files.length === 1 ? 'file' : 'files'}`}</span>

                {isUnlocked ? (
                    <ul className="flex flex-col gap-4 items-center w-full">
                        {capsule.files.map((file: { name: string, type: string, cid: string, id: string }) => (
                            <li key={file.id} className="col-span-1 w-1/2 min-w-52 max-w-96">
                                <FilePreview name={file.name} type={file.type} url={fileUrls[file.cid]} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-red-600"><ClockIcon className="w-6 h-6 inline" /> Unlock Date: {capsule.unlockDate.toLocaleString({
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}</p>
                )}
            </div>
        </div>
    );
}