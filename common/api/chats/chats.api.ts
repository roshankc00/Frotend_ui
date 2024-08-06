import api from "..";

export const getAllMineChats = async () => {
  const { data } = await api.get("/chats/mine/all");
  return data;
};
