"use client"

import Image from "next/image"

export function File({ type, url, blurred }: { type: string, url: string, blurred: string }) {
    return (
        <div>
            {type.startsWith('image/') ? (
                <Image
                    priority
                    data-fancybox="gallery"
                    className="cursor-pointer border-r-2"
                    src={url}
                    alt='file'
                    width={350}
                    height={350}
                    placeholder="blur"
                    blurDataURL={blurred}
                />
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