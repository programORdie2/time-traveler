"use client"

import Image from "next/image"

export function File({ type, url }: { type: string, url: string }) {
    const onClick = () => {
        // Zoom in on image or video
        const outer = document.createElement("div");
        outer.className = "w-full h-full fixed p-6 top-0 left-0 z-50 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
        document.body.appendChild(outer);
        outer.addEventListener("click", () => {
            outer.remove()
        });

        const viewer = document.createElement("div");
        viewer.innerHTML =`<img src="${url}" style="width: 100%; height: 100%; object-fit: contain;" />`
        viewer.className = "w-full h-full left-0 z-50"
        outer.appendChild(viewer);

        return false
    }

    return (
        <div>
            {type.startsWith('image/') ? (
                <Image className="cursor-pointer border-r-2" onClick={onClick} src={url} alt='file' width={350} height={350} />
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