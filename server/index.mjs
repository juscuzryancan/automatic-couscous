import { app, server } from "./server.mjs";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "node:path";
import apiRouter from "./routers/index.mjs";
import "./socket.mjs";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.sendFile(
    path.join(new URL(import.meta.url).pathname, "..", "public/index.html"),
  );
});

app.use("/api", apiRouter);

// 404 Handler
app.get("*", (req, res, next) => {
  res.status(404).send({
    error: "404 - Not Found",
    message: "No route found for the requested URL",
  });
});

// error handling middleware
app.use((error, req, res, next) => {
  console.error("SERVER ERROR: ", error);
  if (res.status < 400) res.status(500);
  res.send({
    error: error.message,
    name: error.name,
    table: error.table,
  });
});

const { PORT = 8080 } = process.env;
server.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
