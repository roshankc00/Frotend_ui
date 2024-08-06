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
import { addUserToChat, postChats } from "@/common/api/chats/chats.api";
import { client } from "@/components/provider/ReactQuery";
import { AddUserToChatValidation } from "@/lib/validation/addUserTOChat.validation";

export const ExtendedAddUserToChatValidation = AddUserToChatValidation.extend({
  chatId: z.string(),
});
export const useHandleAddUserToChat = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: addUserToChat,
    onSuccess() {
      client.invalidateQueries({ queryKey: ["mine-chats"] });
      toast.success("user Added  successfully");
    },
  });

  const addUserToChatHandler = async (
    data: z.infer<typeof ExtendedAddUserToChatValidation>
  ) => {
    mutateAsync(data);
  };

  return { addUserToChatHandler, isPending };
};
