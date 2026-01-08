import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { View } from "react-native";
import { BaseInput, BaseInputProps } from "../base/BaseInput";
import { BaseText } from "../base/BaseText";

/**
 * Props for {@link FormField}
 *
 * Extends {@link BaseInputProps} so all TextInput props are supported.
 */
export interface FormFieldProps extends BaseInputProps {
  /**
   * Field label displayed above the input.
   */
  label?: string;

  /**
   * Helper text displayed below the input when there is no error.
   */
  helperText?: string;

  /**
   * Error message displayed below the input.
   * When provided, the input will be rendered in an error state.
   */
  errorMessage?: string;

  /**
   * Marks the field as required.
   * A red asterisk (*) will be displayed next to the label.
   *
   * @default false
   */
  required?: boolean;
}

/**
 * FormField
 *
 * A presentational wrapper for {@link BaseInput} that provides:
 * - Label
 * - Required indicator
 * - Helper text
 * - Error message
 *
 * This component does **NOT** handle:
 * - Form state
 * - Validation logic
 * - Submission
 *
 * Those concerns should be handled by higher-level abstractions
 * such as `react-hook-form` or custom form controllers.
 */
export function FormField({
  label,
  helperText,
  errorMessage,
  required = false,
  ...inputProps
}: Readonly<FormFieldProps>) {
  const { spacing, colors, typography } = useTheme();
  const hasError = Boolean(errorMessage);

  return (
    <View style={{ marginBottom: spacing.md }}>
      {label && (
        <BaseText
          style={{
            marginBottom: spacing.xs,
            color: colors.text,
            fontSize: typography.caption.fontSize,
          }}>
          {label}
          {required && <BaseText style={{ color: colors.danger }}> *</BaseText>}
        </BaseText>
      )}

      <BaseInput error={hasError} {...inputProps} />

      {(errorMessage || helperText) && (
        <BaseText
          style={{
            marginTop: spacing.xs,
            color: hasError ? colors.danger : colors.muted,
            fontSize: typography.caption.fontSize,
          }}>
          {errorMessage || helperText}
        </BaseText>
      )}
    </View>
  );
}
