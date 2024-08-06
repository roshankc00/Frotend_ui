// hooks/useWebSocket.ts
"use client";
import { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import Cookies from "js-cookie";
import { useGetMessagesWithChatId } from "../react-query/messages/get-all-messages-of-chat";

const useWebSocket = (chatId: string) => {
  const [socket, setSocket] = useState<any | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [typingUser, setTypingUser] = useState<string | null>(null);

  const {
    data: initialMessages,
    isFetching,
    isLoading,
    refetch,
  } = useGetMessagesWithChatId(chatId);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    const socketInstance = io("http://localhost:4000", {
      transports: ["websocket"],
      auth: {
        token: `${Cookies.get("Authentication")}`,
      },
    });

    setSocket(socketInstance);

    // Initialize messages state with previously fetched messages
    if (initialMessages) {
      setMessages(initialMessages);
    }

    socketInstance.emit("join_room", { chatId });

    socketInstance.on("receive_message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socketInstance.on("typing", (data) => {
      setTypingUser(data.isTyping ? data?.typerInfo?.name : null);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [chatId, initialMessages]);

  const sendMessage = useCallback(
    (message: string) => {
      socket?.emit("send_message", { chatId, content: message });
    },
    [socket, chatId]
  );

  const handleTyping = useCallback(
    (isTyping: boolean) => {
      socket?.emit("typing", { chatId, isTyping });
    },
    [socket, chatId]
  );

  return {
    messages,
    typingUser,
    sendMessage,
    handleTyping,
  };
};

export default useWebSocket;
