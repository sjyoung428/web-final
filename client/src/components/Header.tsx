"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Button from "./common/Button";
import Avatar from "./common/Avatar";
import Title from "./common/Title";

const Header = () => {
  const { data: session } = useSession();

  return (
    <nav className="border p-2 w-full top-0 backdrop-blur-sm">
      <ul className="w-full grid grid-cols-3 ">
        <div />
        <li className="flex justify-center items-center">
          <Title>
            {session && session.user
              ? `${session.user.name}님 환영합니다.`
              : "로그인 후 이용해주세요."}
          </Title>
        </li>
        <li>
          {session && (
            <div className="flex justify-end gap-5">
              <Avatar image={session.user?.image} />
              <Button onClick={() => signOut()}>로그아웃</Button>
            </div>
          )}
          {!session && (
            <div className="flex justify-end gap-5">
              <Button onClick={() => signIn()}>로그인</Button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
