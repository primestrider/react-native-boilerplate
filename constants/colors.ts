export const colors = {
  light: {
    background: "#FFFFFF",
    surface: "#F8FAFC",
    primary: "#2563EB",
    text: "#0F172A",
    muted: "#64748B",
    border: "#E2E8F0",
    danger: "#EF4444",
    success: "#22C55E",

    disabled: "#E5E7EB", // ✅ ADD
  },
  dark: {
    background: "#020617",
    surface: "#020617",
    primary: "#3B82F6",
    text: "#F8FAFC",
    muted: "#94A3B8",
    border: "#1E293B",
    danger: "#F87171",
    success: "#4ADE80",

    disabled: "#020617", // ✅ ADD (slightly darker surface)
  },
} as const;
