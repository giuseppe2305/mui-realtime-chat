import { Stack, Typography } from "@mui/material";

function Message() {
  return (
    <Stack direction="row" justifyContent="end">
      <Stack
        sx={{
          backgroundColor: "success.main",
          color: "success.contrastText",
          px: 2,
          py: 1,
          borderRadius: 2,
          maxWidth: "80%",
        }}
      >
        <Typography>First message</Typography>
        <Typography variant="caption" sx={{ ml: "auto" }}>
          1 min ago
        </Typography>
      </Stack>
    </Stack>
  );
}

export { Message };
