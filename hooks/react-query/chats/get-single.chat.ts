import { getAllMineChats, singleChat } from "@/common/api/chats/chats.api";
import { useQuery } from "@tanstack/react-query";

export const useGetsingleChat = (id: string) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["single-chat"],
    queryFn: () => singleChat(id),
  });
  return { data, isFetching, isLoading, refetch };
};
