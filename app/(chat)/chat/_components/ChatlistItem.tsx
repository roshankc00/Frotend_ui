"use client";
import { IChats } from "@/interfaces/chat.interface";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  chat: IChats;
};

const ChatlistItem: React.FC<Props> = ({ chat }) => {
  const pathName = usePathname();
  const router = useRouter();
  const isActive =
    pathName === `/chat/${chat._id}` || pathName?.startsWith(`${chat._id}/`);
  const onClick = () => {
    router.push(`/chat/${chat._id}`);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slat e-500 text-sm font-[500] pl-6 transition-all rounded-md hover:text-slate-500 hover:bg-slate-300/20 mt-4",
        isActive && "text-slate-700 bg-slate-200 w-full"
      )}
    >
      <span className="flex items-center gap-x-2 py-4">{chat.name}</span>
    </button>
  );
};

export default ChatlistItem;
