"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const MessageList = () => {
  return (
    <div className="h-screen border border-gray-200">
      <Card className=" border-none bg-white">
        <CardContent className="flex flex-col h-full">
          <CardTitle className="text-lg font-semibold mb-4"></CardTitle>
          <div className="flex-1 overflow-y-auto p-4 border-t border-gray-200">
            {/* Chat messages will go here */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md">
                  Hello, how are you?
                </div>
              </div>
              <div className="flex items-start justify-end space-x-2">
                <div className="bg-gray-300 text-gray-800 p-3 rounded-lg shadow-md">
                  I'm good, thanks!
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-100">
            <textarea
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Send
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageList;
