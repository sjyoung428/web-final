"use client";

import React, { useEffect, useState } from "react";
import Avatar from "../common/Avatar";
import { DefaultSession } from "next-auth";
import { useSession } from "next-auth/react";

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
      {me === false && (
        <li className="flex items-center gap-2">
          <Avatar image={user.image} size="sm" />
          <span>{user.name}</span>
          <span>{children}</span>
        </li>
      )}
      {me === true && (
        <li className="flex justify-end items-center gap-2">
          <span>{user.name}</span>
          <span>{children}</span>
          <Avatar image={user?.image} size="sm" />
        </li>
      )}
    </>
  );
};

export default ChatItem;
