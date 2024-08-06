import api from "..";

export const getAllMessagesOfChat = async (chatId: string) => {
  const { data } = await api.get(`/messages?chatId=${chatId}`);
  return data;
};
