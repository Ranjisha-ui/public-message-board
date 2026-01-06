"use client";

import Modal from "./Modal";
import { theme } from "../constants/theme/theme";
import { CONTENTS } from "../constants/contents";

interface Post {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

interface ViewMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
}

export default function ViewMessageModal({ isOpen, onClose, post }: ViewMessageModalProps) {
  if (!post) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={CONTENTS.VIEW_MODAL.TITLE}>
      <div className="space-y-6">
        {/* From */}
        <div>
          <p className="text-sm font-medium mb-1" style={{ color: theme.colors.textSecondary }}>
            {CONTENTS.VIEW_MODAL.FROM_LABEL}
          </p>
          <p className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
            {post.name}
          </p>
        </div>

        {/* Message */}
        <div>
          <p className="text-sm font-medium mb-3" style={{ color: theme.colors.textSecondary }}>
            {CONTENTS.VIEW_MODAL.MESSAGE_LABEL}
          </p>
          <p
            className="leading-relaxed whitespace-pre-wrap text-lg"
            style={{ color: theme.colors.textPrimary }}
          >
            {post.message}
          </p>
        </div>

        {/* Date */}
        <div className="pt-4 text-right">
          <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
            {CONTENTS.VIEW_MODAL.POSTED_ON}{" "}
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </Modal>
  );
}