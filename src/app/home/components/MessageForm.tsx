// src/app/home/components/MessageForm.tsx

import { useState } from "react";
import { CONTENTS } from "../constants/contents";

interface MessageFormProps {
  onSuccess: () => void;
  onClose: () => void;
}

export default function MessageForm({ onSuccess, onClose }: MessageFormProps) {
  // 1. Changed state: Removed 'feedbackType', added 'name'
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    // Basic validation
    if (!message.trim()) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(), // 2. Sending name instead of feedback type
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
      alert(CONTENTS.ERROR || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* 3. Replaced Reaction Buttons with Name Input */}
      <div>
        <input
          type="text"
          className="w-full p-4 bg-gray-100 rounded-2xl border-none focus:ring-0 text-gray-800 placeholder-gray-800 text-base"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Message Input Section (Unchanged) */}
      <div>
        <textarea
          className="w-full p-4 bg-gray-100 rounded-2xl border-none focus:ring-0 text-gray-800 placeholder-gray-800 resize-none text-base"
          rows={3}
          placeholder="Drop your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ minHeight: "100px" }}
        />
      </div>

      {/* Action Buttons (Unchanged) */}
      <div className="flex gap-4 pt-2">
        <button
          onClick={onClose}
          className="flex-1 py-3.5 rounded-full bg-gray-100 text-black font-bold text-lg hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="flex-1 py-3.5 rounded-full bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-500 transition-colors disabled:opacity-50"
          style={{ backgroundColor: "#FCE344" }} 
        >
          {isLoading ? "..." : "Submit"}
        </button>
      </div>
    </div>
  );
}