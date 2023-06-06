import { Server } from "socket.io";
import http from "http";

const socket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });
};

export default socket;
