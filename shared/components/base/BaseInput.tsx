import { useTheme } from "@/hooks/useTheme";
import React, { forwardRef, useCallback, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

export interface BaseInputProps extends TextInputProps {
  error?: boolean;
  disabled?: boolean;
}

export const BaseInput = forwardRef<TextInput, BaseInputProps>(
  (
    { error = false, disabled = false, style, onFocus, onBlur, ...props },
    ref
  ) => {
    const { colors, spacing, radius, typography } = useTheme();
    const [focused, setFocused] = useState(false);

    let borderColor: string = colors.border;

    if (error) {
      borderColor = colors.danger;
    } else if (focused) {
      borderColor = colors.primary;
    }

    const handleFocus = useCallback(
      (e: any) => {
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (e: any) => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur]
    );

    return (
      <View
        style={[
          styles.container,
          {
            borderColor,
            borderRadius: radius.md,
            backgroundColor: disabled ? colors.disabled : colors.surface,
            opacity: disabled ? 0.6 : 1,
          },
        ]}
        accessibilityState={{ disabled }}>
        <TextInput
          ref={ref}
          editable={!disabled}
          placeholderTextColor={colors.muted}
          style={[
            styles.input,
            {
              color: colors.text,
              fontSize: typography.body.fontSize,
              paddingHorizontal: spacing.md,
              paddingVertical: spacing.sm,
            },
            style,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          accessibilityRole="text"
          {...props}
        />
      </View>
    );
  }
);

BaseInput.displayName = "BaseInput";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  input: {
    minHeight: 44,
  },
});
