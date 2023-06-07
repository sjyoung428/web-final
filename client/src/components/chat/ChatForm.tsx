"use client";

import { useForm } from "react-hook-form";
import Button from "../common/Button";
import { useSession } from "next-auth/react";

const ChatForm = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <form
      className="flex border w-[80%] relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-full py-3 px-4"
        type="text"
        {...register("chat", { required: true })}
      />
      <Button className="absolute top-0 right-0">채팅 입력</Button>
      {errors.chat && (
        <span className="absolute bottom-[-25px] left-0">
          채팅을 입력해주세요.
        </span>
      )}
    </form>
  );
};

export default ChatForm;
