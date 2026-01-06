// src/app/home/ui/Textarea.tsx

import { theme } from "../constants/theme/theme";

interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Textarea({
  placeholder = "",
  value,
  onChange,
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={6}
      style={{
        width: "100%",
        padding: "12px 16px",
        borderRadius: theme.borderRadius.md,
        border: `1px solid ${theme.colors.border}`,
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        resize: "none",
        outline: "none",
        transition: theme.transitions.fast,
      }}
    />
  );
}
