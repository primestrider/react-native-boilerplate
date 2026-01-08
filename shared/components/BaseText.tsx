import { useTheme } from "@/hooks/useTheme";
import { memo } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";

type Variant = keyof ReturnType<typeof useTheme>["typography"];

interface Props extends RNTextProps {
  /**
   * Typography variant
   * Default: body
   */
  variant?: Variant;

  /**
   * Text color override
   * Default: theme.colors.text
   */
  color?: string;

  /**
   * Text alignment
   */
  align?: TextStyle["textAlign"];

  /**
   * Disable font scaling for this text
   * Useful for buttons or fixed UI labels
   * @default false
   */
  disableScaling?: boolean;
}

/**
 * App Text component
 * Enforces typography system and theme colors
 */
export const Text = memo(function Text({
  variant = "body",
  color,
  align,
  style,
  disableScaling = false,
  allowFontScaling,
  maxFontSizeMultiplier,
  ...props
}: Readonly<Props>) {
  const { typography, colors } = useTheme();

  const resolvedAllowScaling = allowFontScaling ?? !disableScaling;

  const resolvedMaxMultiplier =
    maxFontSizeMultiplier ?? (disableScaling ? 1 : 1.3);

  return (
    <RNText
      {...props}
      allowFontScaling={resolvedAllowScaling}
      maxFontSizeMultiplier={resolvedMaxMultiplier}
      style={[
        typography[variant],
        {
          color: color ?? colors.text,
          textAlign: align,
        },
        style,
      ]}
    />
  );
});
