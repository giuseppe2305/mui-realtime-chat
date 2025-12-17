import { Send } from "@mui/icons-material";
import { Paper, Stack, TextField, IconButton } from "@mui/material";

function MessageInput() {
  return (
    <Paper elevation={4} sx={{ m: 2 }}>
      <Stack direction="row" alignItems="center">
        <TextField fullWidth />
        <IconButton color="primary" sx={{ mx: 2, p: 1 }}>
          <Send />
        </IconButton>
      </Stack>
    </Paper>
  );
}

export { MessageInput };
