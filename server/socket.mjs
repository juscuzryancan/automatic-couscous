import { server } from "./server.mjs";
import { Server } from "socket.io";

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (event) => {
    console.log("chat message", event);
    io.emit("chat message", event);
  });
});
