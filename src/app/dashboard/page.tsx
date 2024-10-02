import { auth } from "@/auth";
import { getAllCapsules } from "@/utils/capsule";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const user = await auth();
    if (!user?.user) {
        redirect("/signin");
    }

    const capsules = await getAllCapsules(user?.user?.email!);

    return (
        <div>
            <h1>Dashboard</h1>

            <p>{JSON.stringify(user, null, 2)}</p>
            <p>{JSON.stringify(capsules, null, 2)}</p>
        </div>
    );
}