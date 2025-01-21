import { LogoutButton } from "@/components/logout-button";
import { ThemeDropdown } from "@/components/theme-dropdown";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
      <ThemeDropdown />
    </>
  );
}
