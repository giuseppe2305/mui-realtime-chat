import { Stack, Typography } from "@mui/material";
import type { Message as MessageType } from "../types/Message";
import { formatMessageDate } from "../lib/formatMessageDate";

interface Props {
  data: MessageType;
}

function Message({ data }: Props) {
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
        <Typography>{data.content}</Typography>
        <Typography variant="caption" sx={{ ml: "auto" }}>
          {formatMessageDate(data.date)}
        </Typography>
      </Stack>
    </Stack>
  );
}

export { Message };
