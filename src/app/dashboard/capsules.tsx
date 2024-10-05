import Capsule from "@/components/capsule";
import { getAllCapsules } from "@/lib/capsule";
import { NoCapsulesPage } from "@/components/no-capsules";

export default async function Capsules({ user }: { user: any }) {
    let capsules = await getAllCapsules(user?.user?.email!);
    
    // Sort our capsules by unlock date
    capsules = capsules.sort((a, b) => {
        return new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime();
    });

    return (
        <div>
            {capsules.length === 0 && (
                <NoCapsulesPage />
            )}

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capsules.map((capsule) => (
                    <li key={capsule.id} className="col-span-1 h-[210px]">
                        <Capsule data={capsule} />
                    </li>
                ))}
            </ul>
        </div>
    );
}