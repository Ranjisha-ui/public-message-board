// src/app/home/components/MessageForm.tsx

import { useState } from "react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { CONTENTS } from "../constants/contents";

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
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || null,
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setName("");
        setMessage("");
        onSuccess();
        onClose();
      }
    } catch {
      alert(CONTENTS.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="message-form">
      <div>
        <label>{CONTENTS.ADD_MODAL.NAME_LABEL}</label>
        <Input
          placeholder={CONTENTS.ADD_MODAL.NAME_PLACEHOLDER}
          value={name}
          onChange={setName}
        />
      </div>

      <div>
        <label>{CONTENTS.ADD_MODAL.MESSAGE_LABEL}</label>
        <Textarea
          placeholder={CONTENTS.ADD_MODAL.MESSAGE_PLACEHOLDER}
          value={message}
          onChange={setMessage}
        />
      </div>

      <div className="form-actions">
        <Button onClick={onClose}>
          {CONTENTS.CLOSE_BUTTON}
        </Button>

        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? CONTENTS.FORM.SUBMITTING : CONTENTS.SUBMIT_BUTTON}
        </Button>
      </div>
    </div>
  );
}
