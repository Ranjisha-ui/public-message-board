// src/app/home/components/MessageForm.tsx

import { useState } from "react";
import { CONTENTS } from "../../constants/contents";
import { createMessage } from "../../services/message.service";
import MessageFormUI from "../../ui/MessageFormUI";
interface MessageFormProps {
  onSuccess: () => void;
  onClose: () => void;
}

export default function MessageForm({ onSuccess, onClose }: MessageFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setIsLoading(true);

    try {
      await createMessage({
        name: name.trim(),
        message: message.trim(),
      });

      setName("");
      setMessage("");
      onSuccess();
      onClose();
    } catch {
      alert(CONTENTS.ERROR || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MessageFormUI
      name={name}
      message={message}
      isLoading={isLoading}
      onNameChange={setName}
      onMessageChange={setMessage}
      onSubmit={handleSubmit}
      onClose={onClose}
    />
  );
}
