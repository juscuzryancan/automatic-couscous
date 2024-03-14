import { io } from "./server.mjs";

//TODO: try to create a concept of rooms
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
