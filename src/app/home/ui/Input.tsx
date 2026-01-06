// src/app/home/ui/Input.tsx

import { theme } from "../constants/theme/theme";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export default function Input({
  placeholder = "",
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "12px 16px",
        borderRadius: theme.borderRadius.md,
        border: `1px solid ${theme.colors.border}`,
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        outline: "none",
        transition: theme.transitions.fast,
      }}
    />
  );
}
