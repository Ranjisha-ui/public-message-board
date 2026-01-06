// src/app/components/Modal.tsx
"use client";

import { useEffect } from "react";
import { theme } from "../constants/theme/theme";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl shadow-2xl"
        style={{
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.xl,
          boxShadow: theme.shadows.lg,
          animation: "fadeIn 250ms ease-out forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: theme.colors.border }}
        >
          <h2
            className="text-xl font-semibold"
            style={{ color: theme.colors.textPrimary }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-2xl opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: theme.colors.textSecondary }}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}