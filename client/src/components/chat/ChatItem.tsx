"use client";

import Avatar from "../common/Avatar";
import type { DefaultSession } from "next-auth";
import { cls } from "@/utils/cls";

interface ChatItemProps {
  message: string;
  user: DefaultSession["user"];
  me: boolean;
}

const ChatItem = ({ message, user, me }: ChatItemProps) => {
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
          <span className="mb-2 font-thin text-sm">{user?.name}</span>
          <span className="bg-slate-200 rounded-md text-slate-900 p-4 max-w-[50%] whitespace-pre-wrap">
            {message}
          </span>
        </div>
        <Avatar image={user?.image} size="sm" />
      </li>
    </>
  );
};

export default ChatItem;
