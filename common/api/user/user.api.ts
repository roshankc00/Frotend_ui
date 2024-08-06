import { LoginValidationSchema } from "@/lib/validation/login.validation";
import api from "..";
import { z } from "zod";
import { SignUpValidationSchema } from "@/lib/validation/signup.validation";

export const signupApi = async (
  body: z.infer<typeof SignUpValidationSchema>
) => {
  const { data } = await api.post("/auth/signup", body);
  return data;
};

export const loginApi = async (body: z.infer<typeof LoginValidationSchema>) => {
  const { data } = await api.post("/auth/login", body);
  return data;
};

export const getCurrentUserApi = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};

export const verifyEmailApi = async (token: string) => {
  const { data } = await api.get(`/users/verify-email/${token}`);
  return data;
};
