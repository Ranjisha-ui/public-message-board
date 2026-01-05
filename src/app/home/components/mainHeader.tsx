import { CONTENTS } from "../constants/contents";
import { theme } from "../constants/theme/theme";

export default function MainHeader() {
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

      <span
        style={{
          color: theme.colors.textPrimary,
          fontWeight: 800,
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {CONTENTS.ACTIONS.OPEN_FORM}
      </span>
    </header>
  );
}
