// src/app/home/components/MessageCard.tsx

import { CONTENTS } from "../constants/contents";

// Props
interface MessageCardProps {
  id: number;
  name: string | null;
  message: string;
  createdAt: string;
  onClick: () => void;
}

// Array of icon paths (replace names if yours are different)
const icons = [
  "/icons/i1.png",
  "/icons/i2.png",
  "/icons/i3.png",
  "/icons/i4.png",
  "/icons/i5.png",
  "/icons/i6.png",
  "/icons/i7.png",
  "/icons/i8.png",
  "/icons/i9.png",
  "/icons/i10.png",
];

export default function MessageCard({
  id,
  name,
  message,
  createdAt,
  onClick,
}: MessageCardProps) {
  // Choose a random icon per message
  const icon = icons[id % icons.length]; // stable per message

  return (
    <div className="message-card" onClick={onClick}>
      <div className="message-card-header">
        <img src={icon} alt="user icon" className="message-card-icon" />
        <h3 className="message-card-name">
          {name || CONTENTS.ANONYMOUS}
        </h3>
      </div>

      <p className="message-card-text">{message}</p>

      <p className="message-card-date">
        {CONTENTS.VIEW_MODAL.POSTED_ON} {new Date(createdAt).toLocaleString()}
      </p>
    </div>
  );
}
