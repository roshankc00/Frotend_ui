"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import useWebSocket from "@/hooks/socket/socker-hook";
import { useGetCurrentUser } from "@/hooks/react-query/users/get-current-user.hook";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  chatId: string;
};

const MessageList: React.FC<Props> = ({ chatId }) => {
  const [messageInput, setMessageInput] = useState("");
  const { messages, typingUser, sendMessage, handleTyping } =
    useWebSocket(chatId);

  const {
    data: currentUser,
    isLoading: currentUserLoading,
    isFetching: currentUserFetching,
  } = useGetCurrentUser();

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      sendMessage(messageInput);
      setMessageInput("");
    }
  };

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      handleTyping(false);
    }, 1000);

    return () => clearTimeout(typingTimeout);
  }, [messageInput, handleTyping]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to get the avatar initials (first letter of the name)
  const getAvatarInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <ScrollArea className="flex flex-col h-screen bg-gray-100 p-4">
      <Card className="flex-1 border-none bg-white shadow-lg rounded-lg flex flex-col">
        <CardContent className="flex flex-col h-full">
          <CardTitle className="text-lg font-semibold mb-4">Chat</CardTitle>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 pb-24">
            {" "}
            <div className="space-y-4">
              {messages.map((msg: any, index: any) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.senderInfo._id === currentUser?._id
                      ? "justify-end"
                      : "justify-start"
                  } items-center`}
                >
                  {/* Avatar */}
                  {msg.senderInfo._id !== currentUser?._id && (
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-lg ${
                        msg.senderInfo._id === currentUser?._id
                          ? "bg-gray-500"
                          : "bg-blue-700"
                      } mr-2`}
                    >
                      {getAvatarInitials(msg.senderInfo.name)}
                    </div>
                  )}
                  {/* Message */}
                  <div
                    className={`p-3 max-w-xs rounded-lg shadow-md ${
                      msg.senderInfo._id === currentUser?._id
                        ? "bg-gray-300 text-gray-800"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    <div>{msg.content}</div>
                  </div>
                </div>
              ))}
              {/* Typing Indicator */}
              {typingUser && (
                <div className="flex items-center justify-start space-x-2 mt-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold text-lg">
                    {getAvatarInitials(typingUser)}{" "}
                    {/* Display typing user's avatar */}
                  </div>
                  <div className="text-gray-600">Typing...</div>
                </div>
              )}
            </div>
          </div>
          <div
            className="p-4 -ms-7 border-t border-gray-200 bg-gray-50 flex-shrink-0 fixed bottom-0 w-full
"
          >
            <div className=" border-gray-200 bg-gray-50 flex flex-col gap-4 pb-5 ">
              <textarea
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => {
                  setMessageInput(e.target.value);
                  handleTyping(e.target.value.length > 0);
                }}
                className="w-[60%] h-20  p-2 border border-gray-300 rounded-lg resize-none"
              />
              <button
                onClick={handleSendMessage}
                className=" w-[100px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Send
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default MessageList;
