// src/app/home/ui/Button.tsx

import { theme } from "../theme";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  type = "button",
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        borderRadius: theme.borderRadius.md,
        boxShadow: theme.shadows.card,
        padding: "12px 24px",
        fontWeight: 500,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: theme.transitions.fast,
      }}
    >
      {children}
    </button>
  );
}
