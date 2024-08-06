"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Send } from "lucide-react";

import React from "react";

const MessageList = () => {
  return (
    <div className="h-screen flex   items-center flex-col border border-gray-200">
      <div className=" flex flex-col mt-[30%] items-center">
        <Send size={50} />
        <span className="mt-4">Send messages</span>
      </div>
    </div>
  );
};

export default MessageList;
