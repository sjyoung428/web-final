"use client";

import React from "react";
import ChatItem from "./ChatItem";
import { useSession } from "next-auth/react";

const ChatList = () => {
  const { data: session } = useSession();

  return (
    <ul className="p-4 overflow-y-scroll">
      <ChatItem
        user={{ name: "test", email: "test@naver.com", image: undefined }}
      >
        상대 채팅
      </ChatItem>
      <ChatItem user={session?.user}>내 채팅</ChatItem>
    </ul>
  );
};

export default ChatList;
