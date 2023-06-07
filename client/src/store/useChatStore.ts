import { io } from "socket.io-client";
import { create } from "zustand";

const socket = io("http://localhost:8080");

interface Message {
  message: string;
  user: string;
}

interface ChatStore {
  messages: Message[];
  sendMessage: (message: string, user: string) => void;
  addMessage: (message: string, user: string) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  sendMessage: (message, user) => {
    socket.emit("message", message, user);
  },

  addMessage: (message, user) =>
    set((state) => ({
      messages: [...state.messages, { message, user }],
    })),
}));

socket.on("message", (message: string, user: string) => {
  useChatStore.getState().addMessage(message, user);
});

export default useChatStore;
