import { TrashIcon } from "@radix-ui/react-icons"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

import { deleteCapsule } from "@/actions/deleteCapsule"
import { redirect } from "next/navigation"

export function DeleteButton({ id }: { id: string }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive"><TrashIcon className="h-4 w-4" />Delete</Button>
                </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this time capsule
                        and remove your files from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <form action={async () => {
                            "use server"
                            await deleteCapsule(id);
                            redirect("/dashboard");
                        }} style={{ padding: 0 }}>
                            <Button variant="destructive" type="submit" className="w-full"><TrashIcon className="h-4 w-4" />Delete</Button>
                        </form>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}