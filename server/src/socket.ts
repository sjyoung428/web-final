import { Server } from "socket.io";
import http from "http";

const socket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("message", (message, user) => {
      console.log("message: ", message, "user", user);

      socket.emit("message", message, user);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

export default socket;
