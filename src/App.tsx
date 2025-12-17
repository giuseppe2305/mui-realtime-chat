import { Box, Chip, createTheme, CssBaseline, Divider, Paper, Stack, ThemeProvider, Typography } from "@mui/material";
import { MessagesList } from "./components/MessagesList";
import { MessageInput } from "./components/MessageInput";

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
            <MessageInput />
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
