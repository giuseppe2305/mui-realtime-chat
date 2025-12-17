import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import { Paper, Stack, TextField, IconButton } from "@mui/material";

interface Props {
  addMessage: (message: string) => void;
}

function MessageInput({ addMessage }: Props) {
  const [typing, setTyping] = useState("");

  function sendMessage() {
    if (!isMessageValid()) return;

    addMessage(typing);
    setTyping("");
  }

  function isMessageValid() {
    return !!typing.trim();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <Paper elevation={4} sx={{ m: 2 }}>
      <Stack direction="row" alignItems="center">
        <TextField
          value={typing}
          onChange={(e) => setTyping(e.target.value)}
          onKeyDown={handleKeyDown}
          fullWidth
          multiline
          minRows={1}
          placeholder="Type a message"
          slotProps={{
            input: {
              endAdornment: (
                <IconButton
                  onClick={sendMessage}
                  color="primary"
                  disabled={!isMessageValid()}
                  aria-label="Send message"
                >
                  <Send />
                </IconButton>
              ),
            },
          }}
        />
      </Stack>
    </Paper>
  );
}

export { MessageInput };
