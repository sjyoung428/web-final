import { User } from "@/hooks/useUser";
import { io } from "socket.io-client";
import { create } from "zustand";

export const socket = io("http://localhost:8080");

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

socket.on("message", (message: string, user: User) => {
  useChatStore.getState().addMessage(message, user);
});

export default useChatStore;
