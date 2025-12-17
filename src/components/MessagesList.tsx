import { Stack } from "@mui/material";
import { Message } from "./Message";
import type { Message as MessageType } from "../types/Message";

interface Props {
  messages: MessageType[];
}

function MessagesList({ messages }: Props) {
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
