export const typography = {
  fontRegular: "WorkSans-Regular",
  fontMedium: "WorkSans-Medium",
  fontSemiBold: "WorkSans-SemiBold",
  fontBold: "WorkSans-Bold",
  // 🔹 Display (hero / splash / big number)
  display: {
    fontSize: 32,
    fontWeight: "700" as const,
    lineHeight: 40,
    letterSpacing: -0.5,
  },

  // 🔹 Heading (screen title)
  heading: {
    fontSize: 24,
    fontWeight: "700" as const,
    lineHeight: 32,
    letterSpacing: -0.3,
  },

  // 🔹 Title (section title, card title)
  title: {
    fontSize: 18,
    fontWeight: "600" as const,
    lineHeight: 24,
  },

  // 🔹 Subtitle (secondary title)
  subtitle: {
    fontSize: 16,
    fontWeight: "500" as const,
    lineHeight: 22,
  },

  // 🔹 Body (default text)
  body: {
    fontSize: 14,
    fontWeight: "400" as const,
    lineHeight: 20,
  },

  // 🔹 Body Strong (emphasis)
  bodyBold: {
    fontSize: 14,
    fontWeight: "600" as const,
    lineHeight: 20,
  },

  // 🔹 Small / Meta text
  caption: {
    fontSize: 12,
    fontWeight: "400" as const,
    lineHeight: 16,
  },

  // 🔹 Tiny helper text
  footnote: {
    fontSize: 10,
    fontWeight: "400" as const,
    lineHeight: 14,
  },

  // 🔹 Button text
  button: {
    fontSize: 14,
    fontWeight: "600" as const,
    lineHeight: 20,
    textTransform: "uppercase" as const,
    letterSpacing: 0.5,
  },

  // 🔹 Input text
  input: {
    fontSize: 14,
    fontWeight: "400" as const,
    lineHeight: 20,
  },

  // 🔹 Label (form label)
  label: {
    fontSize: 12,
    fontWeight: "500" as const,
    lineHeight: 16,
  },
};
