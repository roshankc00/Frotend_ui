import { z } from "zod";
import api from "..";
import { CreateChatValidation } from "../../../lib/validation/create.chat.validation";
import { AddUserToChatValidation } from "@/lib/validation/addUserTOChat.validation";
import { ExtendedAddUserToChatValidation } from "@/hooks/react-query/chats/add-user-to-chat";

export const getAllMineChats = async () => {
  const { data } = await api.get("/chats/mine/all");
  return data;
};
export const postChats = async (body: z.infer<typeof CreateChatValidation>) => {
  const { data } = await api.post("/chats", body);
  return data;
};
export const addUserToChat = async (
  body: z.infer<typeof ExtendedAddUserToChatValidation>
) => {
  const { data } = await api.patch("/chats/add/user-to-group", body);
  return data;
};

export const singleChat = async (id: string) => {
  const { data } = await api.get(`/chats/${id}`);
  return data;
};
