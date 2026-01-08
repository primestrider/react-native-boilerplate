import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { BaseButton } from "@/shared/components/base/BaseButton";
import { BaseText } from "@/shared/components/base/BaseText";
import { ControlledFormField } from "@/shared/components/forms/ControllerFormField";
import { SelectBottomSheet } from "@/shared/components/forms/SelectBottomSheet";

type ExampleFormValues = {
  name: string;
  email: string;
  country: string;
};

export default function FormExampleScreen() {
  const theme = useTheme();
  const { colors, spacing } = theme;

  const form = useForm<ExampleFormValues>({
    defaultValues: {
      name: "",
      email: "disabled@example.com",
      country: "",
    },
  });

  const { handleSubmit, watch, setValue } = form;

  const [countryOpen, setCountryOpen] = useState(false);
  const selectedCountry = watch("country");

  const onSubmit = (data: ExampleFormValues) => {
    console.log("SUBMIT DATA:", data);
  };

  return (
    <FormProvider {...form}>
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={{
          padding: spacing.lg,
          gap: spacing.md,
        }}
      >
        {/* ===== Header ===== */}
        <BaseText variant="title">Form Example</BaseText>
        <BaseText variant="caption">
          Screen ini adalah contoh nyata penggunaan seluruh shared components.
        </BaseText>

        {/* ===== Basic Input ===== */}
        <ControlledFormField
          name="name"
          label="Full Name"
          placeholder="John Doe"
          helperText="Nama lengkap sesuai KTP"
          rules={{ required: "Name is required" }}
        />

        {/* ===== Validation Example ===== */}
        <ControlledFormField
          name="email"
          label="Email"
          placeholder="email@example.com"
          keyboardType="email-address"
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format",
            },
          }}
        />

        {/* ===== Disabled Field ===== */}
        <ControlledFormField
          name="email"
          label="Disabled Field Example"
          disabled
        />

        {/* ===== Select Trigger ===== */}
        <BaseText variant="caption">Country</BaseText>

        <BaseButton
          title={selectedCountry || "Select country"}
          variant="secondary"
          onPress={() => setCountryOpen(true)}
        />

        {/* ===== Select Bottom Sheet ===== */}
        <SelectBottomSheet
          visible={countryOpen}
          onClose={() => setCountryOpen(false)}
          selectedValue={selectedCountry}
          searchable
          options={[
            { label: "Indonesia", value: "Indonesia" },
            { label: "Singapore", value: "Singapore" },
            { label: "Japan", value: "Japan" },
            { label: "United States", value: "United States" },
          ]}
          onSelect={(val) => {
            setValue("country", val, { shouldValidate: true });
            setCountryOpen(false);
          }}
        />

        {/* ===== Submit Button ===== */}
        <BaseButton
          title="Submit Form"
          onPress={handleSubmit(onSubmit)}
        />

        {/* ===== Debug Section ===== */}
        <View style={{ marginTop: spacing.lg }}>
          <BaseText variant="caption">Debug Output</BaseText>
          <BaseText variant="caption">Name: {watch("name") || "-"}</BaseText>
          <BaseText variant="caption">Email: {watch("email") || "-"}</BaseText>
          <BaseText variant="caption">
            Country: {selectedCountry || "-"}
          </BaseText>
        </View>
      </ScrollView>
    </FormProvider>
  );
}
