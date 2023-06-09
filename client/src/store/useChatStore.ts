import { User } from "@/hooks/useUser";
import { io } from "socket.io-client";
import { create } from "zustand";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:8080";

export const socket = io(NEXT_PUBLIC_URL);

interface Message {
  id: string;
  message: string;
  user: User;
}

interface ChatStore {
  messages: Message[];
  sendMessage: (message: string, user: User) => void;
  addMessage: (message: string, user: User) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  sendMessage: (message, user) => {
    socket.emit("message", message, user);
  },

  addMessage: (message, user) =>
    set((state) => ({
      messages: [
        ...state.messages,
        { message, user, id: Date.now().toString() },
      ],
    })),
}));

export default useChatStore;
