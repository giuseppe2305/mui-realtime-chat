import { Stack } from "@mui/material";
import { messages } from "../mock/messages";
import { Message } from "./Message";

function MessagesList() {
  return (
    <Stack
      sx={{
        alignItems: "stretch",
        gap: 1,
        p: 2,
        flexGrow: 1,
        overflowY: "auto",
      }}
    >
      {messages.map((m) => (
        <Message key={m.id} data={m} />
      ))}
    </Stack>
  );
}

export { MessagesList };
