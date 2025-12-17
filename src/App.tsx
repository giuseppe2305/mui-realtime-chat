import {
  Box,
  Chip,
  createTheme,
  CssBaseline,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Message } from "./components/Message";
import { Send } from "@mui/icons-material";
import { messages } from "./mock/messages";
import { MessagesList } from "./components/MessagesList";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper sx={{ p: 3, width: 800 }} elevation={4}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5">Realtime Chat</Typography>
            <Chip label="4 Users online" variant="outlined" color="success" />
          </Stack>
          <Divider sx={{ my: 3 }} />
          <Stack sx={{ height: 500, backgroundColor: "background.default" }}>
            <MessagesList />
            <Paper elevation={4} sx={{ m: 2 }}>
              <Stack direction="row" alignItems="center">
                <TextField fullWidth multiline />
                <IconButton color="primary" sx={{ mx: 2 }}>
                  <Send />
                </IconButton>
              </Stack>
            </Paper>
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
