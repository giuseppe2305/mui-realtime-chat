import { Box, Chip, createTheme, CssBaseline, Divider, Paper, Stack, ThemeProvider, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { MessagesList } from "./components/MessagesList";
import { MessageInput } from "./components/MessageInput";
import Login from "./components/Login";
import { useState } from "react";
import { messages as messagesMock } from "./mock/messages";
import type { Message } from "./types/Message";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [messages, setMessages] = useState(messagesMock);
  const [username, setUsername] = useState<string | null>(() => localStorage.getItem("username"));

  function handleLogin(name: string) {
    localStorage.setItem("username", name);
    setUsername(name);
  }

  function handleLogout() {
    localStorage.removeItem("username");
    setUsername(null);
  }

  const addMessage = (content: string) => {
    const newMessage: Message = {
      content,
      date: Date.now(),
      id: Date.now(),
      userId: 1,
      username: username ?? "Unknown",
    };

    setMessages((m) => [...m, newMessage]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper sx={{ p: 3, width: 800 }} elevation={4}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">Realtime Chat</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip label="4 Users online" variant="outlined" color="primary" />
              {username ? (
                <Chip label={`@${username}`} color="primary" onDelete={handleLogout} deleteIcon={<LogoutIcon />} />
              ) : null}
            </Stack>
          </Stack>
          <Divider sx={{ my: 3 }} />

          {!username ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Stack sx={{ height: 500, backgroundColor: "background.default" }}>
              <MessagesList messages={messages} />
              <MessageInput addMessage={addMessage} />
            </Stack>
          )}
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
