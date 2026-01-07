import { CONTENTS } from "../constants/contents";
import { theme } from "../theme";
import MessageCard from "../components/MessageCard";

interface Message {
  id: number;
  name: string | null;
  message: string;
  createdAt: string;
}

interface MessageGridUIProps {
  messages: Message[];
  onViewMessage: (message: Message) => void;
}

export default function MessageGridUI({
  messages,
  onViewMessage,
}: MessageGridUIProps) {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12 w-full">
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
