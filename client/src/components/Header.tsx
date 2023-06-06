"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Button from "./common/Button";
import Avatar from "./common/Avatar";

const Header = () => {
  const { data: session } = useSession();

  return (
    <nav className="border p-2 fixed w-full top-0 backdrop-blur-sm">
      <ul className="w-full grid grid-cols-3 ">
        <div />
        <li className="flex justify-center items-center">
          <h2 className="">채팅</h2>
        </li>
        <li>
          {session && (
            <div className="flex justify-end gap-5">
              <Avatar image={session.user?.image} />
              <Button onClick={() => signOut()}>로그아웃</Button>
            </div>
          )}
          {!session && <Button onClick={() => signIn()}>로그인</Button>}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
