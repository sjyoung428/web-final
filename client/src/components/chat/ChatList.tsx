"use client";

import React, { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import useChatStore, { socket } from "@/store/useChatStore";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { User } from "@/hooks/useUser";
import { useSession } from "next-auth/react";

const ChatList = () => {
  const { messages } = useChatStore((state) => ({ messages: state.messages }));
  const endRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  useIsomorphicLayoutEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    socket.on("message", (message: string, user: User) => {
      useChatStore.getState().addMessage(message, user);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <ul className="h-full overflow-y-auto p-4 ">
      {messages.map((message) => (
        <ChatItem
          key={message.id}
          user={message.user}
          message={message.message}
          me={message.user.name === session?.user?.name}
        />
      ))}
      <div ref={endRef} />
    </ul>
  );
};

export default ChatList;
