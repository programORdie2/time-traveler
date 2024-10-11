"use client"

import { Button } from "@/components/ui/button"
import { DownloadIcon } from "@radix-ui/react-icons";

export default function DownloadButton({ url, name }: { url: string, name: string }) {
    const download = (e: any) => {
        e.preventDefault();
        
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
    }

    return (
        <Button onClick={download} title="Download" variant="outline" className="px-2"><DownloadIcon className="w-5 h-5" /></Button>
    )
}