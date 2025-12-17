import type { Message } from "../types/Message";

export const messages: Message[] = [
  {
    id: 1,
    content: "Hey everyone 👋",
    date: "2025-12-17T09:00:00Z",
    userId: 101,
    username: "john_doe",
  },
  {
    id: 2,
    content: "Hi John! How are you?",
    date: "2025-12-17T09:01:30Z",
    userId: 102,
    username: "jane_smith",
  },
  {
    id: 3,
    content: "I'm doing great, thanks for asking!",
    date: "2025-12-17T09:02:10Z",
    userId: 101,
    username: "john_doe",
  },
  {
    id: 4,
    content: "Are we still meeting at 2 PM?",
    date: "2025-12-17T09:05:00Z",
    userId: 103,
    username: "alex_k",
  },
  {
    id: 5,
    content: "Yes, see you then 👍",
    date: "2025-12-17T09:06:45Z",
    userId: 102,
    username: "jane_smith",
  },
];
