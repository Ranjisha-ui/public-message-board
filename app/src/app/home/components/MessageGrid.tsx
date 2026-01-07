import { useState } from "react";
import MessageGridUI from "../ui/MessageGridUI";
import ViewMessageModal from "./viewMessageModal";
import { Message } from "./type";

interface MessageGridProps {
  messages: Message[];
}

export default function MessageGrid({ messages }: MessageGridProps) {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleViewMessage = (message: Message) => {
    setSelectedMessage(message);
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };

  return (
    <>
      <div className={selectedMessage ? 'modal-open-blur' : ''}>
        <MessageGridUI
          messages={messages}
          onViewMessage={handleViewMessage}
        />
      </div>

      <ViewMessageModal
        open={selectedMessage !== null}
        onClose={closeModal}
        message={selectedMessage}
      />
    </>
  );
}