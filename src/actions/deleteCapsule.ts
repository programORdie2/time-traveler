"use server";

import { auth } from "@/auth";
import { deleteCapsule as _delete } from "@/lib/capsule";

export async function deleteCapsule(id: string) {
    const user = await auth();
    if (!user?.user) {
        return { success: false, message: "Unauthorized" };
    }

    const ownerEmail = user?.user?.email;
    if (!ownerEmail) {
        return { success: false, message: "Unauthorized" };
    }

    await _delete(id, ownerEmail);
    return { success: true, message: "Capsule deleted" };
}