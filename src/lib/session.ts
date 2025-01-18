"use server";

import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    return null;
  }

  return accessToken.value;
}
