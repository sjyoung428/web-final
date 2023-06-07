"use client";

import { useEffect } from "react";
import Avatar from "../common/Avatar";
import { useSession } from "next-auth/react";
import ChatForm from "./ChatForm";
import { useNetwork } from "@/hooks/useNetwork";
import ChatItem from "./ChatItem";
import { toast } from "react-hot-toast";

const ChatRoom = () => {
  useNetwork({
    onOnline: () => toast.success("온라인 상태입니다."),
    onOffline: () => toast.error("오프라인 상태입니다."),
  });
  const { data: session } = useSession();
  useEffect(() => {}, []);

  return (
    <>
      <section className="border w-[80%] h-[80%]">
        <ul className="p-4 overflow-y-scroll">
          <ChatItem
            user={{ name: "test", email: "test@naver.com", image: undefined }}
          >
            상대 채팅
          </ChatItem>
          <ChatItem user={session?.user}>내 채팅</ChatItem>
        </ul>
      </section>
      {session && session.user && <ChatForm />}
    </>
  );
};

export default ChatRoom;
