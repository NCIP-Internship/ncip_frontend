import { TypeLoginSchema } from "../signin-auth";
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) || "";

// TODO: Refactor to Tanstack, kung sino man siya, yung gagawa api's
export const loginUserService = async (data: TypeLoginSchema) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }

  return body;
};

export const signOutService = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to sign out");
  }
};
