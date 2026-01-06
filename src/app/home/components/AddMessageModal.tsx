// src/app/components/AddMessageModal.tsx
"use client";

import { useState } from "react";
import Modal from "./Modal";
import { theme } from "../constants/theme/theme";

interface AddMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void; // To refresh messages after adding
}

export default function AddMessageModal({
  isOpen,
  onClose,
  onSuccess,
}: AddMessageModalProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) {
      setError("Both name and message are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), content: content.trim() }),
      });

      if (res.ok) {
        setName("");
        setContent("");
        onClose();
        onSuccess(); // Trigger refresh of message list
      } else {
        const data = await res.json();
        setError(data.error || "Failed to add message.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Message">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
            style={{ color: theme.colors.textSecondary }}
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
            style={{
              backgroundColor: "#374151",
              borderColor: theme.colors.border,
              color: theme.colors.textPrimary,
            }}
            placeholder="Enter your name"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
            style={{ color: theme.colors.textSecondary }}
          >
            Message
          </label>
          <textarea
            id="message"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 rounded-lg border outline-none resize-none transition-colors"
            style={{
              backgroundColor: "#374151",
              borderColor: theme.colors.border,
              color: theme.colors.textPrimary,
            }}
            placeholder="Write your message here..."
            required
            disabled={loading}
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm" style={{ color: "#f87171" }}>
            {error}
          </p>
        )}

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-5 py-2.5 rounded-lg font-medium opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: theme.colors.textSecondary }}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 rounded-lg font-medium text-white transition-opacity"
            style={{
              backgroundColor: theme.colors.primary,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Adding..." : "Add Message"}
          </button>
        </div>
      </form>
    </Modal>
  );
}