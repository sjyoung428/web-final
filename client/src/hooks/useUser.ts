import { useSession } from "next-auth/react";

export interface User {
  name: string;
  email: string;
  image: string;
}

export const useUser = () => {
  const { data: session } = useSession();
  if (!session) throw new Error("로그인 하세요");
  return session.user as User;
};
