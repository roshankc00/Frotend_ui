// postChats

"use client";
import { loginApi } from "@/common/api/user/user.api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { LoginValidationSchema } from "@/lib/validation/login.validation";
import { z } from "zod";
import { CreateChatValidation } from "@/lib/validation/create.chat.validation";
import { postChats } from "@/common/api/chats/chats.api";
import { client } from "@/components/provider/ReactQuery";

export const useHandleCreateChat = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: postChats,
    onSuccess(data) {
      client.invalidateQueries({ queryKey: ["mine-chats"] });
      toast.success("Chat created successfully");
    },
  });

  const createChat = async (data: z.infer<typeof CreateChatValidation>) => {
    mutateAsync(data);
  };

  return { createChat, isPending };
};
