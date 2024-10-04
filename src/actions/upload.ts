"use server";

import { auth } from "@/auth";
import { createCapsule } from "@/lib/capsule";
import { uploadFiles as _uploadFiles, deleteFiles as _deleteFiles } from "@/utils/upload";
import { redirect } from "next/navigation";

const SUPPORTED_MIMES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "video/mp4",
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
]

export async function uploadFiles(prevState: any, formData: FormData) {
    const user = await auth();
    if (!user?.user) {
        return { success: false, message: "Unauthorized" };
    }

    const files = formData.getAll("file") as File[];
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const _unlockDate = formData.get("unlockDate") as string;

    if (files.some((file) => file.size > 10 * 1024 * 1024)) {
        return { success: false, message: "File size exceeds 10MB" };
    }

    if (files.some((file) => !SUPPORTED_MIMES.includes(file.type))) {
        return { success: false, message: "Unsupported file type" };
    }

    if (!name || !description || !files || files.length === 0 || !_unlockDate) {
        return { success: false, message: "Missing required fields" };
    }

    let unlockDate;
    try {
        unlockDate = new Date(_unlockDate);
    } catch (error) {
        return { success: false, message: "Invalid unlock date" };
    }

    if (unlockDate.getTime() < Date.now()) {
        return { success: false, message: "Unlock date must be in the future" };
    }


    const uploadedFiles = await _uploadFiles(files);
    let isSuccess = false;
    let id;
    try {
        const result = await createCapsule(user.user.email!, name, description, uploadedFiles, unlockDate);
        isSuccess = true;
        id = result.id;

        return { success: true, message: "Capsule created successfully, redirecting...", id: result.id };
    } catch (error) {
        const fileIds = uploadedFiles.map((file) => file.id);
        _deleteFiles(fileIds);

        console.error(error);

        return { success: false, message: "Failed to create capsule" };
    } finally {
        if (isSuccess) {
            redirect(`/capsule/${id}`);
        }
    }
}