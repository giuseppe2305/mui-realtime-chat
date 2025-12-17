import { Send } from "@mui/icons-material";
import { Paper, Stack, TextField, IconButton } from "@mui/material";
import { useState } from "react";

interface Props {
  addMessage: (message: string) => void;
}

function MessageInput({ addMessage }: Props) {
  const [typing, setTyping] = useState("");

  return (
    <Paper elevation={4} sx={{ m: 2 }}>
      <Stack direction="row" alignItems="center">
        <TextField value={typing} onChange={(e) => setTyping(e.target.value)} fullWidth />
        <IconButton onClick={() => addMessage(typing)} color="primary" sx={{ mx: 2, p: 1 }}>
          <Send />
        </IconButton>
      </Stack>
    </Paper>
  );
}

export { MessageInput };
