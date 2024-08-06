import api from "..";

export const handleSignupApi = async (body: any) => {
  const { data } = await api.post("/auth/signup", body);
  return data;
};

export const handleloginApi = async (body: any) => {
  const { data } = await api.post("/api/auth/login", body);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await api.get("/api/auth/me");
  return data;
};
