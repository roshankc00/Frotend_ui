// getCurrentUserApi

import { getAllMineChats } from "@/common/api/chats/chats.api";
import { getCurrentUserApi } from "@/common/api/user/user.api";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentUser = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["current-user"],
    queryFn: () => getCurrentUserApi(),
  });
  return { data, isFetching, isLoading };
};
