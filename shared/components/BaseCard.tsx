import { useTheme } from "@/hooks/useTheme";
import { View, ViewProps, ViewStyle } from "react-native";

type Elevation = "none" | "sm" | "md" | "lg";

interface Props extends ViewProps {
  /**
   * Shadow elevation level
   * @default 'sm'
   */
  elevation?: Elevation;

  /**
   * Apply default padding inside card
   * @default true
   */
  padded?: boolean;

  /**
   * Make card take full available width
   * @default false
   */
  fluid?: boolean;

  /**
   * Custom container style
   */
  style?: ViewStyle;
}

/**
 * Base Card component
 * Used as a surface container for sections, lists, and content blocks
 */
export function Card({
  elevation = "sm",
  padded = true,
  fluid = false,
  style,
  ...props
}: Readonly<Props>) {
  const { colors, spacing, radius, shadows } = useTheme();

  const baseStyle: ViewStyle = {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: padded ? spacing.md : undefined,
    width: fluid ? "100%" : undefined,
  };

  return (
    <View
      {...props}
      style={[baseStyle, elevation !== "none" && shadows[elevation], style]}
    />
  );
}
