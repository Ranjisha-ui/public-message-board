"use client";

import { useState } from "react";
import Modal from "./Modal";
import { theme } from "../constants/theme/theme";
import { createMessage } from "@/app/lib/api";
import { CONTENTS } from "../constants/contents";

interface AddMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
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
      setError(CONTENTS.ERRORS.FAILED_TO_ADD);
      return;
    }

    setLoading(true);
    setError("");

    try {
      await createMessage({
        name: name.trim(),
        message: content.trim(),
      });

      setName("");
      setContent("");
      onClose();
      onSuccess();
    } catch {
      setError(CONTENTS.ERRORS.FAILED_TO_ADD);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
              color: theme.colors.primary,
            }}
            placeholder="Enter your name"
            disabled={loading}
            required
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
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border outline-none resize-none transition-colors"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
              color: theme.colors.primary,
            }}
            placeholder="Write your message here..."
            disabled={loading}
            required
          />
        </div>

        {error && (
          <p className="text-sm" style={{ color: "#f87171" }}>
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
