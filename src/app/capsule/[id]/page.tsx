import { redirect } from "next/navigation";
import { auth } from "@/auth";

import { getCapsule } from "@/utils/capsule";
import { getFiles } from "@/utils/upload";
import { FilePreview } from "@/components/file-preview";
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
    const unclockDateLocal = new Date(capsule.unlockDate);
    const isUnlocked = Date.now() > unclockDateLocal.getTime();

    const fileUrls = !isUnlocked ? {} : await getFiles(capsule.files.map((file: { cid: string }) => file.cid));

    return (
        <div className="w-full h-full">
            <div className="mt-4 ml-4 mr-4">
                <Link href="/dashboard" className="text-gray-500" title="Back">&lt; Back</Link>
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
                    <p className="text-red-600">Unlock Date: {capsule.unlockDate.toLocaleString({
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