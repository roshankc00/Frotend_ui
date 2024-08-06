"use client";
import { isUserAuthenticated } from "@/common/api";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  if (isUserAuthenticated()) {
    router.push("/chat");
  } else {
    router.push("/login");
  }
  return <></>;
}
