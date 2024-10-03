import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const FilePreview = ({ name, type, url }: { name: string, type: string, url: string }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
                {type.startsWith('image/') ? (
                    <Image src={url} alt={name} width={350} height={350} />
                ) : type.startsWith('video/') ? (
                    <video controls src={url} />
                ) : type.startsWith('audio/') ? (
                    <audio controls src={url} />
                ) : (
                    <p>Unsupported file type</p>
                )}
            </CardContent>
        </Card>
    )
}