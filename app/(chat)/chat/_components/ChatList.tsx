"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useGetMineChats } from "@/hooks/react-query/chats/get-all-chats-of-user";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ChatlistItem from "./ChatlistItem";
import { IChats } from "@/interfaces/chat.interface";
import { ScrollArea } from "@/components/ui/scroll-area";
import CreateChat from "./CreateChat";

const ChatList = () => {
  const { data, isFetching, isLoading } = useGetMineChats();
  return (
    <ScrollArea className=" h-screen border border-gray-200">
      <Card className=" border-none bg-gray-100">
        <CardContent>
          <CardTitle className=" font-semibold text-2xl  my-3">Chats</CardTitle>
          <CardDescription className="overflow-y-auto h-full w-full">
            {!isFetching && !isLoading && data?.length > 0 ? (
              <ul className="space-y-2 w-full">
                {data.map((chat: IChats) => (
                  <ChatlistItem chat={chat} />
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">No chats available</p>
            )}
          </CardDescription>
          <div className="fixed bottom-0">
            <div className="flex justify-center items-center">
              <CreateChat />
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default ChatList;
