"use client"

import { useSearchParams } from "next/navigation";

export default function Error() {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");

    return (
        <div className="text-center p-32">
            <h1 className="text-3xl font-bold text-red-500">
                {code ? `Error ${code.replaceAll("+", " ")}` : "Error"}
            </h1>
        </div>
    )
}