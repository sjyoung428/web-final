"use client";

import Button from "../common/Button";

const ChatForm = () => {
  return (
    <form className="flex border w-[80%] relative">
      <input className="w-full py-2 px-4" type="text" />
      <Button className="absolute top-0 right-0">채팅 입력</Button>
    </form>
  );
};

export default ChatForm;
