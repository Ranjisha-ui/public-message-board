// src/app/home/ui/Modal.tsx

import { theme } from "../constants/theme/theme";
import { CONTENTS } from "../constants/contents";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;  // Content inside the modal (form or message details)
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;  // Don't render anything if closed

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: theme.colors.overlay }}
      onClick={onClose}  // Click outside to close
    >
      <div
        className="rounded-xl p-8 max-w-2xl w-full mx-4"
        style={{
          backgroundColor: theme.colors.background,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          borderRadius: theme.borderRadius.md,
        }}
        onClick={(e) => e.stopPropagation()}  // Stop click from closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-3xl leading-none"
            style={{ color: theme.colors.textSecondary }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="mb-8">{children}</div>

        {/* Footer */}
         
      </div>
    </div>
  );
}