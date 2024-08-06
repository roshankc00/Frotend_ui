"use client";
import { loginApi } from "@/common/api/user/user.api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { LoginValidationSchema } from "@/lib/validation/login.validation";
import { z } from "zod";

export const useHandleLoginUser = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess(data) {
      toast.success("User LoggedIn successfully");
      Cookies.set("Authentication", data?.token);
      router.push("/");
    },
  });

  const handleLogin = async (data: z.infer<typeof LoginValidationSchema>) => {
    mutateAsync(data);
  };

  return { handleLogin, isPending };
};
