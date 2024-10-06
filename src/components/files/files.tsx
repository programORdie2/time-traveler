import { FilePreview } from "@/components/files/file-card"
import FileWrapper from "@/components/files/files-wrapper";

export default function Files({ files, urls }: { files: { cid: string, name: string, type: string, id: string, blurred: string }[], urls: { [key: string]: string } }) {
    return (
        <FileWrapper>
            <ul className="flex flex-col gap-4 items-center w-full">
                {files.map((file: { name: string, type: string, cid: string, id: string, blurred: string }) => (
                    <li key={file.id} className="col-span-1 w-1/2 min-w-52 max-w-96">
                        <FilePreview name={file.name} type={file.type} url={urls[file.cid]} blurred={file.blurred} />
                    </li>
                ))}
            </ul>
        </FileWrapper>
    )
}