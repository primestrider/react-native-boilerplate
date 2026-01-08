import { theme } from "@/constants/theme";
import { useColorScheme } from "react-native";

export function useTheme() {
  const scheme = useColorScheme() ?? "light";

  return {
    scheme,

    /** Colors resolved by color scheme */
    colors: theme.colors[scheme],

    /** Design tokens */
    spacing: theme.spacing,
    typography: theme.typography,
    layout: theme.layout,
    shadows: theme.shadows,
    fonts: theme.fonts,
    radius: theme.radius,
  };
}
