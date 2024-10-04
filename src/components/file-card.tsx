import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { File } from "./file"


export const FilePreview = ({ name, type, url }: { name: string, type: string, url: string }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
                <File type={type} url={url} />
            </CardContent>
        </Card>
    )
}