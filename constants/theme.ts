import { Platform } from "react-native";

import { colors } from "./colors";
import { layout } from "./layout";
import { radius } from "./radius";
import { shadows } from "./shadow";
import { spacing } from "./spacing";
import { typography } from "./typography";
/**
 * Font family mapping per platform
 * Can be replaced with custom fonts later (expo-font)
 */
export const fonts = Platform.select({
  ios: {
    sans: "System",
    serif: "Georgia",
    rounded: "System",
    mono: "Menlo",
  },
  android: {
    sans: "Roboto",
    serif: "serif",
    rounded: "Roboto",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  default: {
    sans: "System",
    serif: "serif",
    rounded: "System",
    mono: "monospace",
  },
});

/**
 * Design system theme
 * Single source of truth for styling
 */
export const theme = {
  colors,
  spacing,
  typography,
  layout,
  shadows,
  radius,
  fonts,
};

export type AppTheme = typeof theme;
