"use client";

import React, { useRef } from "react";
import ChatItem from "./ChatItem";
import useChatStore from "@/store/useChatStore";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

const ChatList = () => {
  const { messages } = useChatStore();
  const endRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ul className="h-full overflow-y-auto p-4 ">
      {messages.map((message) => (
        <ChatItem key={message.id} user={message.user}>
          {message.message}
        </ChatItem>
      ))}
      <div ref={endRef} />
    </ul>
  );
};

export default ChatList;
