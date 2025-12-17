import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

// In-memory store (for demo purposes)
let messages = [];
let users = new Map(); // socketId -> username

// Seed with a couple of messages
messages.push({ id: Date.now() - 60000, content: "Welcome to the chat!", date: Date.now() - 60000, userId: 0, username: "System" });

io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on("join", (username) => {
    users.set(socket.id, username);
    console.log(`User joined: ${username} (${socket.id})`);
    io.emit("users", Array.from(users.values()));
  });

  socket.on("message", (payload) => {
    // payload: { content, username }
    const msg = {
      id: Date.now(),
      content: payload.content,
      date: Date.now(),
      userId: socket.id,
      username: payload.username || "Unknown",
    };
    messages.push(msg);
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    const name = users.get(socket.id);
    users.delete(socket.id);
    console.log(`Socket disconnected: ${socket.id} (${name ?? "unknown"})`);
    io.emit("users", Array.from(users.values()));
  });
});

// HTTP API to get recent messages
app.get("/messages", (req, res) => {
  res.json(messages.slice(-200));
});

// Simple health check
app.get("/health", (req, res) => {
  res.json({ uptime: process.uptime() });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
