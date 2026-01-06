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
  className="px-6 py-3 rounded-xl font-semibold text-lg transition-all transform hover:-translate-y-1"
  style={{
    backgroundColor: theme.colors.primary,
    color: "white",
    boxShadow: theme.shadows.md,
  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.primaryHover}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.primary}
>
  + Add Message
</button>
    </header>
  );
}
