import capsule from "@/models/capsule";

export const getAllCapsules = async (ownerEmail: string) => {
    return await capsule.find({ ownerEmail });
}

export const createCapsule = async (ownerEmail: string, name: string, description: string, uploadedFiles: { name: string, type: string, cid: string }[], unlockDate: Date) => {
    // Make sure that the unlock date is in the future
    if (unlockDate.getTime() < Date.now()) {
        throw new Error("Unlock date must be in the future");
    }

    return await capsule.create({
        name,
        description,
        ownerEmail,
        files: uploadedFiles,
        unlockDate
    });
}