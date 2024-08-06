import React from "react";
import MessageList from "./_components/Messages";

const ChatPage = ({ params }: { params: { chatId: string } }) => {
  return (
    <div>
      <MessageList chatId={params.chatId} />
    </div>
  );
};

export default ChatPage;
