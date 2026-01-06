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
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark semi-transparent overlay
      }}
      onClick={onClose} // Close when clicking outside
    >
      {/* Modal Card */}
      <div
        className="w-full max-w-2xl overflow-hidden"
        style={{
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.xl,
          boxShadow: theme.shadows.lg,
          animation: `modalEnter ${theme.transitions.normal} forwards`,
        }}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-6 border-b"
          style={{ borderColor: theme.colors.border }}
        >
          <h2
            className="text-2xl font-bold"
            style={{ color: theme.colors.textPrimary }}
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-3xl leading-none opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: theme.colors.textSecondary }}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-8">{children}</div>
      </div>

      {/* Smooth entrance animation */}
      <style jsx>{`
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}