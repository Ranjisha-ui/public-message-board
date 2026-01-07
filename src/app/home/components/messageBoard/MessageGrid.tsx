// src/app/home/components/MessageGrid.tsx

import MessageCard from "./MessageCard";
import { CONTENTS } from "../../constants/contents";
import { theme } from "../../theme";

interface Message {
  id: number;
  name: string | null;
  message: string;
  createdAt: string;
}

interface MessageGridProps {
  messages: Message[];
  onViewMessage: (message: Message) => void;
}

export default function MessageGrid({
  messages,
  onViewMessage,
}: MessageGridProps) {
  if (messages.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "48px 0" }}>
        <p style={{ color: theme.colors.textSecondary, fontSize: "1.25rem" }}>
          {CONTENTS.GRID.NO_MESSAGES}
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid w-full"
      style={{
        // Responsive grid matching the reference layout
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", 
        gap: "24px", 
        paddingBottom: "48px"
      }}
    >
      {messages.map((msg) => (
        <MessageCard
          key={msg.id}
          id={msg.id}
          name={msg.name}
          message={msg.message}
          createdAt={msg.createdAt}
          onClick={() => onViewMessage(msg)}
        />
      ))}
    </div>
  );
}