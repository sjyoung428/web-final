import dotenv from "dotenv";
import http from "http";
import socket from "./socket";
import app from "./app";

dotenv.config();

const PORT = 8080;

const server = http.createServer(app);

socket(server);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
