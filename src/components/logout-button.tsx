"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth";
import { redirect } from "next/navigation";

export function LogoutButton() {
  async function handleLogout() {
    await logout();

    redirect("/");
  }

  return <Button onClick={handleLogout}>Logout</Button>;
}
