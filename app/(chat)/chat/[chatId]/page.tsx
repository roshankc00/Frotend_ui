import React from "react";

const ChatPage = ({ params }: { params: { chatId: string } }) => {
  return <div>{params.chatId}</div>;
};

export default ChatPage;
