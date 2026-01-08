import { useTheme } from "@/hooks/useTheme";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  ViewStyle,
} from "react-native";
import { BaseText } from "./BaseText";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface Props extends Omit<PressableProps, "style"> {
  /**
   * Button label text
   */
  title: string;

  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: Variant;

  /**
   * Button height preset
   * @default 'md'
   */
  size?: Size;

  /**
   * Show loading indicator and disable interaction
   */
  loading?: boolean;

  /**
   * Make button take full available width
   * @default false
   */
  fluid?: boolean;

  /**
   * Custom container style (non-pressable state)
   */
  style?: ViewStyle;
}

export function BaseButton({
  title,
  variant = "primary",
  size = "md",
  loading,
  fluid,
  disabled,
  style,
  ...props
}: Readonly<Props>) {
  const { colors, spacing, radius } = useTheme();

  const height = {
    sm: 36,
    md: 44,
    lg: 52,
  }[size];

  const backgroundColor = {
    primary: colors.primary,
    secondary: colors.surface,
    ghost: "transparent",
    danger: colors.danger,
  }[variant];

  const textColor = {
    primary: "#fff",
    secondary: colors.text,
    ghost: colors.primary,
    danger: "#fff",
  }[variant];

  const borderStyle: ViewStyle =
    variant === "secondary"
      ? {
          borderWidth: 1,
          borderColor: colors.border,
        }
      : {};

  const baseStyle: ViewStyle = {
    height,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    width: fluid ? "100%" : undefined,
  };

  return (
    <Pressable
      {...props}
      disabled={disabled || loading}
      style={({ pressed }) => [
        baseStyle,
        borderStyle,
        { opacity: pressed || disabled ? 0.7 : 1 },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <BaseText variant="button" color={textColor} disableScaling>
          {title}
        </BaseText>
      )}
    </Pressable>
  );
}
