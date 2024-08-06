import { getAllMineChats } from "@/common/api/chats/chats.api";
import { useQuery } from "@tanstack/react-query";

export const useGetMineChats = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["mine-chats"],
    queryFn: () => getAllMineChats(),
  });
  return { data, isFetching, isLoading };
};
