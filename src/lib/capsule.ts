import Capsule from "@/models/capsule";
import { deleteFiles } from "../utils/upload";

export const getAllCapsules = async (ownerEmail: string) => {
    return await Capsule.find({ ownerEmail });
}

export const getCapsule = async (id: string, ownerEmail: string) => {
    return await Capsule.findOne({ id, ownerEmail });
}

export const createCapsule = async (ownerEmail: string, name: string, description: string, uploadedFiles: { name: string, type: string, cid: string, id: string }[], unlockDate: Date) => {
    const id = Date.now().toString();

    const data = {
        id,
        name,
        description,
        ownerEmail,
        files: uploadedFiles,
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