import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await auth();

  if (user?.user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}
