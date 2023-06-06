"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Button from "./Button";

const Header = () => {
  const { data: session } = useSession();
  return (
    <nav className="border p-2 fixed w-full top-0 backdrop-blur-sm">
      <ul className="flex gap-5">
        <li>
          {session && <Button onClick={() => signOut()}>로그아웃</Button>}
          {!session && <Button onClick={() => signIn()}>로그인</Button>}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
