import { Box, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from "@mui/material";

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
        <Paper sx={{ p: 3 }}>
          <Typography>Realtime Chat</Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
