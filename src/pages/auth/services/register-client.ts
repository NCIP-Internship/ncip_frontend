import { TypeSignUpSchema } from "../signup-auth";
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) || "";

// TODO: Refactor to Tanstack, kung sino man siya, yung gagawa api's
export const registerUserService = async (formData: TypeSignUpSchema) => {
  const response = await fetch(`${API_BASE_URL}/user/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  try {
    const responseBody = await response.json();
    if (!response.ok) {
      throw new Error(responseBody.message);
    }
  } catch (error) {
    throw new Error("Failed to register user: " + error);
  }
};
