import { spacing } from "./spacing";

export const layout = {
  /**
   * Full screen container with default padding
   */
  screen: {
    flex: 1,
    padding: spacing.md,
  },

  /**
   * Full screen container without padding
   */
  screenNoPadding: {
    flex: 1,
  },

  /**
   * Generic container with padding
   */
  container: {
    padding: spacing.md,
  },

  /**
   * Row direction
   */
  row: {
    flexDirection: "row",
  },

  /**
   * Column direction (default, but explicit for clarity)
   */
  column: {
    flexDirection: "column",
  },

  /**
   * Row with vertical center alignment
   */
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  /**
   * Row with space between items
   */
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  /**
   * Row with space around items
   */
  rowAround: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  /**
   * Row with evenly spaced items
   */
  rowEvenly: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  /**
   * Center items both vertically and horizontally
   */
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  /**
   * Center items horizontally
   */
  centerHorizontal: {
    alignItems: "center",
  },

  /**
   * Center items vertically
   */
  centerVertical: {
    justifyContent: "center",
  },

  /**
   * Fill available space
   */
  flex1: {
    flex: 1,
  },

  /**
   * Allow component to grow if needed
   */
  flexGrow: {
    flexGrow: 1,
  },

  /**
   * Allow component to shrink if needed
   */
  flexShrink: {
    flexShrink: 1,
  },

  /**
   * Relative positioning
   */
  relative: {
    position: "relative",
  },

  /**
   * Absolute positioning
   */
  absolute: {
    position: "absolute",
  },

  /**
   * Fill parent using absolute positioning
   */
  absoluteFill: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  /**
   * Gap helpers
   */
  gapXs: { gap: spacing.xs },
  gapSm: { gap: spacing.sm },
  gapMd: { gap: spacing.md },
  gapLg: { gap: spacing.lg },

  /**
   * Padding helpers
   */
  paddingXs: { padding: spacing.xs },
  paddingSm: { padding: spacing.sm },
  paddingMd: { padding: spacing.md },
  paddingLg: { padding: spacing.lg },

  /**
   * Horizontal padding
   */
  paddingHorizontalMd: {
    paddingHorizontal: spacing.md,
  },

  /**
   * Vertical padding
   */
  paddingVerticalMd: {
    paddingVertical: spacing.md,
  },

  /**
   * Margin top helpers
   */
  marginTopSm: { marginTop: spacing.sm },
  marginTopMd: { marginTop: spacing.md },
  marginTopLg: { marginTop: spacing.lg },

  /**
   * Margin bottom helpers
   */
  marginBottomSm: { marginBottom: spacing.sm },
  marginBottomMd: { marginBottom: spacing.md },
  marginBottomLg: { marginBottom: spacing.lg },

  /**
   * ScrollView content container style
   */
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },

  /**
   * Full width
   */
  fullWidth: {
    width: "100%",
  },

  /**
   * Full height
   */
  fullHeight: {
    height: "100%",
  },

  /**
   * Overflow helpers
   */
  overflowHidden: {
    overflow: "hidden",
  },

  overflowVisible: {
    overflow: "visible",
  },

  /**
   * Z-index helpers
   */
  z1: { zIndex: 1 },
  z10: { zIndex: 10 },
  z100: { zIndex: 100 },

  /**
   * Aspect ratio helpers
   */
  aspectSquare: {
    aspectRatio: 1,
  },

  aspectVideo: {
    aspectRatio: 16 / 9,
  },
};
