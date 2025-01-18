import { fetchAPI } from "./api";

interface LoginInput {
  email: string;
  password: string;
}

export async function login(input: LoginInput) {
  const response = await fetchAPI("/auth/login", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Incorrect email or password");
  }
}

export async function logout() {
  const response = await fetchAPI("/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to logout");
  }
}
