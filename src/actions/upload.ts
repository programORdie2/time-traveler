"use server";

import { auth } from "@/auth";
import { MAX_FILE_SIZE, MAX_FILES_PER_MODULE } from "@/config";
import { countCapsules, createCapsule } from "@/lib/capsule";
import { uploadFiles as _uploadFiles, deleteFiles as _deleteFiles } from "@/utils/upload";
import { redirect } from "next/navigation";

const SUPPORTED_MIMES = [
    "image/jpeg",
    "image/png",
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

    if (await countCapsules(user.user.email!) >= 5) {
        return { success: false, message: "Maximum number of capsules reached" };
    }

    if (files.length > MAX_FILES_PER_MODULE) {
        return { success: false, message: `Too many files (max ${MAX_FILES_PER_MODULE})` };
    }

    if (files.some((file) => file.size > MAX_FILE_SIZE)) {
        return { success: false, message: "File size exceeds 5MB" };
    }

    if (files.some((file) => !SUPPORTED_MIMES.includes(file.type))) {
        return { success: false, message: "Unsupported file type, only image, audio and video files are supported." };
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