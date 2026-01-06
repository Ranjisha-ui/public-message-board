// src/app/components/mainHeader.tsx
import { CONTENTS } from "../constants/contents";
import { theme } from "../constants/theme/theme";

interface MainHeaderProps {
  onOpenAddModal: () => void; // Prop to trigger modal from parent
}

export default function MainHeader({ onOpenAddModal }: MainHeaderProps) {
  return (
    <header
      style={{
        width: "100%",
        background: theme.colors.surface,
        padding: "0.7rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.9rem",
      }}
    >
      <span style={{ color: theme.colors.textPrimary }}>
        {CONTENTS.ACTIONS.SENTENCE_ADD_MESSAGE}
      </span>

      <button
        onClick={onOpenAddModal}
        style={{
          color: theme.colors.primary, // Blue accent to make it stand out
          fontWeight: 800,
          textDecoration: "underline",
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        {CONTENTS.ACTIONS.OPEN_FORM}
      </button>
    </header>
  );
}
