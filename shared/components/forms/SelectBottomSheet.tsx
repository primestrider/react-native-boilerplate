import { useTheme } from "@/hooks/useTheme";
import { FlashList } from "@shopify/flash-list";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { BaseBottomSheet } from "../base/BaseBottomSheet";
import { BaseInput } from "../base/BaseInput";
import { BaseText } from "../base/BaseText";

/**
 * Represents a selectable option inside {@link SelectBottomSheet}.
 */
export interface SelectOption {
  /**
   * Human-readable label displayed to the user.
   */
  label: string;

  /**
   * Underlying value stored in the form state.
   */
  value: string;
}

/**
 * Props for {@link SelectBottomSheet}.
 *
 * Public API intentionally kept stable so this component
 * can switch implementations (Modal / Gorhom)
 * without breaking consumers.
 */
interface SelectBottomSheetProps {
  /**
   * Controls whether the bottom sheet is visible.
   */
  visible: boolean;

  /**
   * List of selectable options.
   */
  options: SelectOption[];

  /**
   * Currently selected option value.
   */
  selectedValue?: string;

  /**
   * Callback invoked when an option is selected.
   */
  onSelect: (value: string) => void;

  /**
   * Callback invoked when the sheet is dismissed.
   */
  onClose: () => void;

  /**
   * Maximum height of the bottom sheet.
   *
   * - `<= 1` → percentage snap point (0–1)
   * - `> 1`  → pixel snap point
   *
   * @default 0.65
   */
  maxHeight?: number;

  /**
   * Enables search input above the options list.
   *
   * @default false
   */
  searchable?: boolean;

  /**
   * Placeholder for the search input.
   *
   * @default "Search"
   */
  searchPlaceholder?: string;
}

/**
 * SelectBottomSheet
 *
 * Feature-level bottom sheet for selecting a value from a list.
 *
 * Responsibilities:
 * - Render search input (optional)
 * - Render selectable option list
 * - Forward open / close behavior to {@link BaseBottomSheet}
 *
 * This component:
 * - Does NOT manage bottom sheet behavior
 * - Does NOT depend on Gorhom directly
 * - Is safe to reuse across forms and screens
 *
 * Infrastructure concerns (drag, snap, keyboard, backdrop)
 * are handled exclusively by {@link BaseBottomSheet}.
 */
export function SelectBottomSheet({
  visible,
  options,
  selectedValue,
  onSelect,
  onClose,
  maxHeight = 0.65,
  searchable = false,
  searchPlaceholder = "Search",
}: Readonly<SelectBottomSheetProps>) {
  const { colors, spacing } = useTheme();
  const [query, setQuery] = useState("");

  /**
   * Resolve snap points from maxHeight.
   * Always allow full expansion to 100%.
   */
  const snapPoints = useMemo<(string | number)[]>(() => {
    if (maxHeight <= 1) {
      return [`${maxHeight * 100}%`, "100%"];
    }
    return [maxHeight, "100%"];
  }, [maxHeight]);

  /**
   * Filter options when search is enabled.
   */
  const filteredOptions = useMemo(() => {
    if (!searchable || !query.trim()) return options;

    const lower = query.toLowerCase();
    return options.filter((opt) => opt.label.toLowerCase().includes(lower));
  }, [options, query, searchable]);

  return (
    <BaseBottomSheet
      visible={visible}
      onClose={onClose}
      snapPoints={snapPoints}>
      {/* Header / Search */}
      {searchable && (
        <View style={styles.header}>
          <BaseInput
            value={query}
            onChangeText={setQuery}
            placeholder={searchPlaceholder}
            autoFocus
            returnKeyType="search"
            blurOnSubmit={false}
          />
        </View>
      )}

      {/* List */}
      <View style={styles.listContainer}>
        <FlashList
          data={filteredOptions}
          keyExtractor={(item) => item.value}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => {
            const selected = item.value === selectedValue;

            return (
              <Pressable
                onPress={() => onSelect(item.value)}
                style={[
                  styles.option,
                  {
                    backgroundColor: selected
                      ? colors.primary + "20"
                      : "transparent",
                  },
                ]}
                accessibilityRole="button"
                accessibilityState={{ selected }}>
                <BaseText color={selected ? colors.primary : colors.text}>
                  {item.label}
                </BaseText>
              </Pressable>
            );
          }}
          ListEmptyComponent={
            searchable ? (
              <View style={{ padding: spacing.md }}>
                <BaseText color={colors.muted}>Empty result</BaseText>
              </View>
            ) : null
          }
        />
      </View>
    </BaseBottomSheet>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  listContainer: {
    flex: 1,
    paddingBottom: 24,
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
});
