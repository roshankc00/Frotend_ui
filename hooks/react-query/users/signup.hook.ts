"use client";
import { signupApi } from "@/common/api/user/user.api";
import { SignUpValidationSchema } from "@/lib/validation/signup.validation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";

export const useHandleSignupUser = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess() {
      toast.success("Check your Mail Please");
      router.push("/login");
    },
  });

  const handleSignup = async (data: z.infer<typeof SignUpValidationSchema>) => {
    mutateAsync(data);
  };

  return { handleSignup, isPending };
};
