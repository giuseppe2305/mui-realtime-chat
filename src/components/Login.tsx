import { useState } from "react";
import { Box, Paper, Stack, TextField, Button, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

interface Props {
  onLogin: (username: string) => void;
}

export default function Login({ onLogin }: Props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function submit() {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Please enter a username");
      return;
    }
    onLogin(trimmed);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: 420 }} elevation={2}>
        <Stack spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
            <PersonIcon />
          </Avatar>
          <Typography variant="h6">Welcome</Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Enter a username to join the chat
          </Typography>

          <TextField
            autoFocus
            fullWidth
            label="Username"
            placeholder="Pick a username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
            error={!!error}
            helperText={error}
          />

          <Button fullWidth variant="contained" onClick={submit}>
            Enter
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
