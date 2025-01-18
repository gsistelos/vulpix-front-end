import { fetchAPI } from "./api";

interface CreateUserInput {
  username: string;
  email: string;
  password: string;
}

export async function createUser(input: CreateUserInput) {
  const response = await fetchAPI("/users", {
    method: "POST",
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }
}
