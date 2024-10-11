import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { File } from "./file"
import DownloadButton from "./download-button"


export const FilePreview = ({ name, type, url, blurred }: { name: string, type: string, url: string, blurred: string }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{name}</CardTitle>
                    <DownloadButton url={url} name={`${name}.${type.split('/')[1]}`} />
                </div>
            </CardHeader>

            <CardContent>
                <File type={type} url={url} blurred={blurred} />
            </CardContent>
        </Card>
    )
}