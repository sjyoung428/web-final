"use client";

import { useEffect } from "react";
import Avatar from "./common/Avatar";
import { useSession } from "next-auth/react";
import ChatForm from "./ChatForm";

const ChatRoom = () => {
  const { data: session } = useSession();
  useEffect(() => {}, []);

  return (
    <>
      <section className="border w-[80%] h-[80%]">
        <ul className="p-4 overflow-y-scroll">
          <li className="flex items-center gap-2">
            <Avatar size="sm" />
            <span>상대 채팅</span>
          </li>

          <li className="flex justify-end items-center gap-2">
            <span>내 채팅</span>
            <Avatar size="sm" />
          </li>
        </ul>
      </section>
      <ChatForm />
    </>
  );
};

export default ChatRoom;
