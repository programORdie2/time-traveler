"use client";

import { uploadFiles } from "@/actions/upload";
import SubmitButton from "./submit-button";
import { InputLabel } from "./ui/input-label";
import { useFormState } from "react-dom";

export default async function UploadForm() {
    const [state, action] = useFormState(uploadFiles, { success: true, message: "" });
    return (
        <form action={action}>
            <InputLabel title="Name" placeholder="Birthday pictures" id="name" name="name" required />
            <InputLabel title="Description" placeholder="A collection of birthday pictures" id="description" name="description" required />
            <InputLabel title="Files" type="file" multiple name="file" required id="file" accept="image/*,video/*,audio/*" />

            <div className="mb-4">
                <label htmlFor="unlockDate">Unlock Date</label><br />
                <input type="datetime-local" name="unlockDate" id="unlockDate" required />
            </div>

            {state.message && <p className={state.success ? "text-green-600" : "text-red-600"}>{state.message}</p>}

            <SubmitButton text="Upload" loadingText="Uploading..." />
        </form>
    )
}