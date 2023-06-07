import React from "react";
import Avatar from "../common/Avatar";

interface ChatItemProps {
  children: React.ReactNode;
  image?: string | null;
  me?: boolean;
}

const ChatItem = ({ children, image, me = false }: ChatItemProps) => {
  return (
    <>
      {me === false && (
        <li className="flex items-center gap-2">
          <Avatar image={image} size="sm" />
          <span>{children}</span>
        </li>
      )}
      {me === true && (
        <li className="flex justify-end items-center gap-2">
          <span>{children}</span>
          <Avatar image={image} size="sm" />
        </li>
      )}
    </>
  );
};

export default ChatItem;
