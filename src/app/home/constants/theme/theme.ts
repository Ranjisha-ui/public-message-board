// src/app/home/constants/theme/theme.ts

export const theme = {
  colors: {
    // Background: Soft warm peach — modern, friendly, minimal
    background: "#d08d59ff",        // Very light peach (elegant & warm)

    // Surfaces: Deep dark gray — high contrast, premium feel
    surface: "#120101ff",           // Near-black for cards, modals, inputs
    surfaceLight: "#1e1e1e",      // Slightly lighter variant for inputs/hover

    // Primary accent: Vercel-inspired vibrant blue
    primary: "#0070f3",           // Exact Vercel blue — energetic & trustworthy
    primaryHover: "#0060d1",      // Darker on hover

    // Text
    textPrimary: "#ffffff",       // Pure white for main text
    textSecondary: "#bbbbbb",     // Soft gray for secondary text (dates, labels)
    textMuted: "#888888",         // Even more muted for hints

    // Borders & dividers
    border: "#333333",
    inputBackground: "#1e1e1e",     // dark background for inputs
    inputText: "#000000",           // BLACK text when typing
    inputPlaceholder: "#666666",    // muted gray placeholder
    inputBorder: "#444444",
    inputBorderFocus: "#0070f3",
  },

  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },

  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 10px 30px rgba(0, 0, 0, 0.15)",
    lg: "0 20px 50px rgba(0, 0, 0, 0.2)",
    cardHover: "0 20px 60px rgba(0, 0, 0, 0.25)",
  },

  transitions: {
    fast: "180ms ease",
    normal: "300ms ease",
    slow: "500ms ease",
  },
};