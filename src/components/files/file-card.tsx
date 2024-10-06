import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { File } from "./file"


export const FilePreview = ({ name, type, url, blurred }: { name: string, type: string, url: string, blurred: string }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
                <File type={type} url={url} blurred={blurred} />
            </CardContent>
        </Card>
    )
}