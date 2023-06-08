"use client";

import React from "react";
import ChatItem from "./ChatItem";
import { useSession } from "next-auth/react";
import useChatStore from "@/store/useChatStore";

const ChatList = () => {
  const { data: session } = useSession();
  const { messages } = useChatStore();

  return (
    <ul className="h-full overflow-y-auto p-4 ">
      {messages.map((message) => {
        return (
          <ChatItem key={message.id} user={message.user}>
            {message.message}
          </ChatItem>
        );
      })}
    </ul>
  );
};

export default ChatList;
