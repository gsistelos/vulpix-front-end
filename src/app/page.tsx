import { AuthTabs } from "@/components/auth-tabs";
import { ThemeDropdown } from "@/components/theme-dropdown";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Auth() {
  const session = await getSession();

  if (session) {
    redirect("/home");
  }

  return (
    <main className="p-10 space-y-10">
      <AuthTabs defaultValue="register" />
      <ThemeDropdown />
    </main>
  );
}
