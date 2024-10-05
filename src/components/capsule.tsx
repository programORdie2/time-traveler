import prettyTimeLeft from "@/utils/prettyTime";

import Link from "next/link";
import { ClockIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
    CardHeader
} from "@/components/ui/card";

export default function Capsule({ data }: { data: { id: string, name: string, description: string, ownerEmail: string, files: { name: string, type: string, cid: string, id: string }[], unlockDate: Date, createdAt: Date } }) {
    const unlockDateLocal = new Date(data.unlockDate);
    const isUnlocked = Date.now() > unlockDateLocal.getTime();

    const inner = (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="text-xl">{data.name}</CardTitle>
                <CardDescription className="text-base">{data.description}</CardDescription>
                <span className="text-sm text-gray-600">Created {data.createdAt.toLocaleDateString()}</span>
                <span className="text-sm text-gray-600">{`${data.files.length} ${data.files.length === 1 ? 'file' : 'files'}`}</span>
            </CardHeader>

            <CardContent>
                {isUnlocked ? (
                    <Button variant="outline"><Link href={`/capsule/${data.id}`}>Open</Link></Button>
                ) : (
                    <div>
                        <p className="text-red-600"><ClockIcon className="w-6 h-6 inline" /> Unlocks in {prettyTimeLeft(unlockDateLocal)}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )

    if (!isUnlocked) {
        return (
            <Link href={`/capsule/${data.id}`}>
                {inner}
            </Link>
        )
    }
    return inner
}