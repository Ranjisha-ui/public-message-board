import { ICON_LIST } from "../utils";
import MessageCardUI from "../ui/MessageCardUI";

interface MessageCardProps {
  id: number;
  name: string | null;
  message: string;
  createdAt: string;
  onClick: () => void;
}

const cardThemes = [
  { bg: "bg-blue-50", text: "text-blue-600" },
  { bg: "bg-orange-50", text: "text-orange-600" },
  { bg: "bg-green-50", text: "text-green-600" },
  { bg: "bg-yellow-50", text: "text-yellow-600" },
  { bg: "bg-purple-50", text: "text-purple-600" },
  { bg: "bg-pink-50", text: "text-pink-600" },
];

export default function MessageCard({
  id,
  name,
  message,
  createdAt,
  onClick,
}: MessageCardProps) {
  const icon = ICON_LIST[id % ICON_LIST.length];
  const theme = cardThemes[id % cardThemes.length];

  return (
    <MessageCardUI
      name={name}
      message={message}
      icon={icon}
      theme={theme}
      onClick={onClick}
    />
  );
}
