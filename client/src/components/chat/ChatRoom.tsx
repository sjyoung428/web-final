"use client";

import { useSession } from "next-auth/react";
import ChatForm from "./ChatForm";
import { useNetwork } from "@/hooks/useNetwork";
import { toast } from "react-hot-toast";
import ChatList from "./ChatList";

const ChatRoom = () => {
  useNetwork({
    onOnline: () => toast.success("온라인 상태입니다."),
    onOffline: () => toast.error("오프라인 상태입니다."),
  });
  const { data: session } = useSession();

  return (
    <>
      <section className="border w-[80%] h-[80%]">
        <ChatList />
      </section>
      {session && session.user && <ChatForm />}
    </>
  );
};

export default ChatRoom;
