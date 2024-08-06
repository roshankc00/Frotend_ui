import api from "..";

export const signupApi = async (body: any) => {
  const { data } = await api.post("/auth/signup", body);
  return data;
};

export const loginApi = async (body: any) => {
  const { data } = await api.post("/auth/login", body);
  return data;
};

export const getCurrentUserApi = async () => {
  const { data } = await api.get("/api/auth/me");
  return data;
};

export const verifyEmailApi = async (token: string) => {
  const { data } = await api.get(`/users/verify-email/${token}`);
  return data;
};
