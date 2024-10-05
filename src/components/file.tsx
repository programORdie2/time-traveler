"use client"

import Image from "next/image"

export function File({ type, url }: { type: string, url: string }) {
    return (
        <div>
            {type.startsWith('image/') ? (
                <Image priority={true} data-fancybox="gallery" className="cursor-pointer border-r-2" src={url} alt='file' width={350} height={350} />
            ) : type.startsWith('video/') ? (
                <video controls src={url} />
            ) : type.startsWith('audio/') ? (
                <audio controls src={url} />
            ) : (
                <p>Unsupported file type</p>
            )}
        </div>
    )
}