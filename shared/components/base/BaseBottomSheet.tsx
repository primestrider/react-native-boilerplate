import { useTheme } from "@/hooks/useTheme";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { ReactNode, forwardRef, useCallback, useMemo } from "react";

/**
 * Props for {@link BaseBottomSheet}
 */
export interface BaseBottomSheetProps {
  /**
   * Controls whether the bottom sheet is visible.
   */
  visible: boolean;

  /**
   * Called when the sheet is closed.
   */
  onClose: () => void;

  /**
   * Snap points for the bottom sheet.
   *
   * Can be:
   * - percentage string: `"50%"`, `"100%"`
   * - number (pixel)
   *
   * @default ["50%", "100%"]
   */
  snapPoints?: (string | number)[];

  /**
   * Initial snap index.
   *
   * @default 0
   */
  initialIndex?: number;

  /**
   * Enables closing the sheet by swiping down.
   *
   * @default true
   */
  enablePanDownToClose?: boolean;

  /**
   * Content rendered inside the bottom sheet.
   */
  children: ReactNode;
}

/**
 * BaseBottomSheet
 *
 * A reusable, drag-enabled bottom sheet powered by
 * `@gorhom/bottom-sheet`.
 *
 * Responsibilities:
 * - Handle open / close lifecycle
 * - Provide consistent backdrop & keyboard behavior
 * - Apply theme-based styling
 *
 * This component should be used as the foundation
 * for all bottom sheet-based components in the app.
 */
export const BaseBottomSheet = forwardRef<
  BottomSheet,
  Readonly<BaseBottomSheetProps>
>(function BaseBottomSheet(
  {
    visible,
    onClose,
    snapPoints = ["50%", "100%"],
    initialIndex = 0,
    enablePanDownToClose = true,
    children,
  },
  ref
) {
  const { colors } = useTheme();

  const resolvedSnapPoints = useMemo(() => snapPoints, [snapPoints]);

  const handleSheetChange = useCallback(
    (index: number) => {
      // Gorhom uses index -1 to indicate closed state
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  if (!visible) return null;

  return (
    <BottomSheet
      ref={ref}
      index={initialIndex}
      snapPoints={resolvedSnapPoints}
      enablePanDownToClose={enablePanDownToClose}
      onChange={handleSheetChange}
      backdropComponent={renderBackdrop}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      backgroundStyle={{ backgroundColor: colors.surface }}
      handleIndicatorStyle={{ backgroundColor: colors.muted }}>
      <BottomSheetView style={{ flex: 1 }}>{children}</BottomSheetView>
    </BottomSheet>
  );
});
