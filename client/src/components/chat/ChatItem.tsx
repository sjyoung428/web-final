"use client";

import React, { useEffect, useState } from "react";
import Avatar from "../common/Avatar";
import { DefaultSession } from "next-auth";
import { useSession } from "next-auth/react";
import { cls } from "@/utils/cls";

interface ChatItemProps {
  children: React.ReactNode;
  user: DefaultSession["user"];
}

const ChatItem = ({ children, user }: ChatItemProps) => {
  const [me, setMe] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (user && session && user.name === session.user?.name) {
      setMe(true);
    } else {
      setMe(false);
    }
  }, [user, session]);

  if (!user) return null;

  return (
    <>
      <li
        className={cls(
          `w-full flex items-center gap-2 ${me ? "justify-end" : ""}`
        )}
      >
        <div
          className={cls(
            `w-full flex flex-col ${
              me ? "items-end" : "items-start order-last"
            }`
          )}
        >
          <span className="mb-2 font-thin text-sm">{user.name}</span>
          <span className="bg-slate-200 rounded-md text-slate-900 p-4 max-w-[50%] whitespace-pre-wrap">
            {children}
          </span>
        </div>
        <Avatar image={user?.image} size="sm" />
      </li>
    </>
  );
};

export default ChatItem;
