import { CONTENTS } from "./constants/contents";
import { theme } from "./constants/theme/theme";
import MainHeader from "./components/mainHeader";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.body,
        padding: "2rem",
      }}
    >
      {/* 🔵 Top Banner Header */}
        <MainHeader />
    </main>
  );
}
