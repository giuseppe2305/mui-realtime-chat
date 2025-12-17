# Realtime Chat Server

Simple Node.js + Socket.IO backend for the realtime-chat demo.

## Install

cd server

npm install

## Start

npm run dev # for development (requires nodemon)
npm start # to run once

## API

- GET /messages -> returns recent messages (JSON)
- GET /health -> health check

## Socket.IO events

- Client -> server

  - join: string (username) // sent once after connecting
  - message: { content, username }

- Server -> client
  - message: message object
  - users: array of usernames

---

### Quick notes for integrating the frontend

- Add `socket.io-client` to the frontend dependencies:

  npm install socket.io-client

- Optionally set `VITE_API_URL` in `.env` to point to the server, e.g. `VITE_API_URL=http://localhost:3001`

- The frontend should:
  - Connect using `io(VITE_API_URL)`
  - Emit `join` with the username once logged in
  - Emit `message` with `{ content, username }`
  - Listen for `message` and `users` events

This server is intentionally minimal and stores data in memory for demo purposes. For production you should add persistence and authentication.
