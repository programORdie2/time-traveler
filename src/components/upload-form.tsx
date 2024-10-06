"use client";

import { useFormState } from "react-dom";
import { uploadFiles } from "@/actions/upload";

import SubmitButton from "@/components/submit-button";
import { InputLabel } from "@/components/ui/input-label";
import { Button } from "@/components/ui/button";
import { DatetimePicker } from "@/components/datetime-picker";
import { Label } from "@/components/ui/label";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function UploadForm() {
    const [state, action] = useFormState(uploadFiles, { success: true, message: "" });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">+ New</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload New Time Capsule</DialogTitle>
                    <DialogDescription>
                        Upload a new time capsule to your account.
                    </DialogDescription>
                </DialogHeader>

                <form action={action}>
                    <InputLabel title="Name" placeholder="Birthday pictures" id="name" name="name" required />
                    <InputLabel title="Description" placeholder="A collection of birthday pictures" id="description" name="description" required />
                    <InputLabel title="Files" type="file" multiple name="file" required id="file" accept="image/*,video/*,audio/*" />

                    <div className="mb-4">
                        <Label>Unlock Date</Label><br />
                        <DatetimePicker />
                    </div>

                    {state && state.message && <p className={state.success ? "text-green-600" : "text-red-600"}>{state.message}</p>}

                    <SubmitButton text="Upload" loadingText="Uploading..." />
                </form>
            </DialogContent>
        </Dialog>
    )
}