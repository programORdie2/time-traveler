import { auth } from "@/auth";
import { createCapsule } from "@/utils/capsule";
import { uploadFiles as _uploadFiles } from "@/utils/upload";

export async function uploadFiles(prevState: any, formData: FormData) {
    const user = await auth();
    if (!user?.user) {
        throw new Error("Not logged in");
    }

    const files = formData.getAll("file") as File[];
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const _unlockDate = new Date(formData.get("unlockDate") as string);

    let unlockDate;
    try {
        unlockDate = new Date(_unlockDate);
    } catch (error) {
        throw new Error("Invalid unlock date");
    }

    if (!name || !description) {
        throw new Error("Name and description are required");
    }


    const uploadedFiles = await _uploadFiles(files);
    const result = await createCapsule(user.user.email!, name, description, uploadedFiles, unlockDate);
    return result;
}