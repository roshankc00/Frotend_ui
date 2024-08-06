import { getAllMineChats } from "@/common/api/chats/chats.api";
import { getAllMessagesOfChat } from "@/common/api/messages/message.api";
import { useQuery } from "@tanstack/react-query";

export const useGetMessagesWithChatId = (chatid: string) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["messages-with-chatId"],
    queryFn: () => getAllMessagesOfChat(chatid),
  });
  return { data, isFetching, isLoading, refetch };
};
