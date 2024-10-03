"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitButton({ text, loadingText }: { text: string, loadingText: string }) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending}>
            {pending ? loadingText : text}
        </Button>
    );
}