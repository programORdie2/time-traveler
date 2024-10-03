import Link from "next/link";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
    CardHeader
} from "./ui/card";

export default function Capsule({ data }: { data: { id: string, name: string, description: string, ownerEmail: string, files: { name: string, type: string, cid: string, id: string }[], unlockDate: Date } }) {
    const unclockDateLocal = new Date(data.unlockDate);
    const isUnlocked = Date.now() > unclockDateLocal.getTime();

    return (
        <Card>
            <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.description}</CardDescription>

                <span className="text-gray-600 mb-1">{`${data.files.length} ${data.files.length === 1 ? 'file' : 'files'}`}</span>
            </CardHeader>

            <CardContent>
                {isUnlocked ? (
                    <Button variant="outline"><Link href={`/capsule/${data.id}`}>Open</Link></Button>
                ) : (
                    <div>
                        <p className="text-red-600">Unlock Date: {data.unlockDate.toLocaleString()}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}