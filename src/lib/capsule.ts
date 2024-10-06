import { cache } from "react";

import Capsule from "@/models/capsule";
import { deleteFiles } from "../utils/upload";

export const getAllCapsules = cache(async (ownerEmail: string) => {
    return await Capsule.find({ ownerEmail });
})

export const getCapsule = async (id: string, ownerEmail: string) => {
    return await Capsule.findOne({ id, ownerEmail });
}

export const createCapsule = async (ownerEmail: string, name: string, description: string, uploadedFiles: { name: string, type: string, cid: string, id: string, blurred: string }[], unlockDate: Date) => {
    const id = Date.now().toString();

    const files = uploadedFiles.map((file: { name: string, type: string, cid: string, id: string, blurred: string }) => {
        return {
            name: file.name,
            type: file.type,
            cid: file.cid,
            id: file.id,
            blurred: file.blurred
        }
    })

    const data = {
        id,
        name,
        description,
        ownerEmail,
        files: files,
        unlockDate
    }

    return await Capsule.create(data);
}

export const deleteCapsule = async (id: string, ownerEmail: string) => {
    const capsule = await Capsule.findOne({ id, ownerEmail });
    if (!capsule) {
        throw new Error("Capsule not found");
    }

    const pinataIds = capsule.files.map((file: { id: string }) => file.id);
    deleteFiles(pinataIds);

    await Capsule.deleteOne({ id, ownerEmail });
}