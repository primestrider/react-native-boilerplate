import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { FormField, FormFieldProps } from "./FormField";

/**
 * Props for {@link ControlledFormField}
 *
 * @template T - Form values type inferred from `useForm`
 */
export interface ControlledFormFieldProps<T extends FieldValues>
  extends Omit<FormFieldProps, "value" | "onChangeText" | "onBlur"> {
  /**
   * Field name.
   * Must match the form schema provided to `useForm`.
   */
  name: Path<T>;

  /**
   * Validation rules passed to `react-hook-form`.
   *
   * @example
   * ```ts
   * rules={{ required: "This field is required" }}
   * ```
   */
  rules?: any;
}

/**
 * ControlledFormField
 *
 * A thin wrapper around {@link FormField} that connects it to
 * `react-hook-form` using {@link Controller}.
 *
 * This component:
 * - Automatically reads `control` from `FormProvider`
 * - Binds form value and change handlers
 * - Displays validation errors
 *
 * This component does **NOT**:
 * - Manage form submission
 * - Perform validation logic itself
 * - Add custom UI behavior
 *
 * Usage:
 * ```tsx
 * <FormProvider {...form}>
 *   <ControlledFormField
 *     name="email"
 *     label="Email"
 *     rules={{ required: "Email is required" }}
 *   />
 * </FormProvider>
 * ```
 */
export function ControlledFormField<T extends FieldValues>({
  name,
  rules,
  ...props
}: Readonly<ControlledFormFieldProps<T>>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormField
          {...props}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
