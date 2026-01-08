import { ConfigContext, ExpoConfig } from "expo/config";

/**
 * Expo application configuration.
 *
 * This configuration is used by Expo CLI and EAS Build to
 * generate native Android, iOS, and Web applications.
 *
 * @param {ConfigContext} context - Expo config context containing the default config.
 * @returns {ExpoConfig} Fully resolved Expo application configuration.
 *
 * @see https://docs.expo.dev/workflow/configuration/
 */
const appConfig = ({ config }: ConfigContext): ExpoConfig => ({
  /**
   * Spread the default Expo config to keep compatibility
   * with Expo CLI and environment-based overrides.
   */
  ...config,

  /** Application display name */
  name: "React Native Boilerplate",

  /** URL-safe identifier used by Expo */
  slug: "react-native-boilerplate",

  /** Application version (used for OTA updates & stores) */
  version: "1.0.0",

  /** Lock orientation to portrait mode */
  orientation: "portrait",

  /** Custom URI scheme (deep linking) */
  scheme: "reactnativeboilerplate",

  /** Automatically adapt to system light/dark mode */
  userInterfaceStyle: "automatic",

  /** Enable React Native New Architecture (Fabric + TurboModules) */
  newArchEnabled: true,

  /**
   * iOS-specific configuration
   */
  ios: {
    /** Enable iPad support */
    supportsTablet: true,

    /** Unique iOS bundle identifier */
    bundleIdentifier: "com.boilerplate.primestrider",
  },

  /**
   * Android-specific configuration
   */
  android: {
    /** Unique Android application ID (required for Play Store) */
    package: "com.boilerplate.primestrider",

    /** Adaptive launcher icon configuration */
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },

    /** Enable Android edge-to-edge UI */
    edgeToEdgeEnabled: true,

    /** Disable predictive back gesture (Android 14+) */
    predictiveBackGestureEnabled: false,
  },

  /**
   * Web-specific configuration
   */
  web: {
    /** Generate static web build */
    output: "static",

    /** Web favicon */
    favicon: "./assets/images/favicon.png",
  },

  /**
   * Expo & third-party plugins
   */
  plugins: [
    /** File-based routing */
    "expo-router",

    /**
     * Splash screen configuration
     */
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],

    /** Secure key-value storage */
    "expo-secure-store",

    /** Localization & i18n utilities */
    "expo-localization",

    /** Error monitoring & crash reporting */
    "@sentry/react-native",

    /** Fonts */
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/WorkSans-Regular.ttf",
          "./assets/fonts/WorkSans-Medium.ttf",
          "./assets/fonts/WorkSans-SemiBold.ttf",
          "./assets/fonts/WorkSans-Bold.ttf",
        ],
      },
    ],
  ],

  /**
   * Experimental Expo features
   */
  experiments: {
    /** Enable typed routes for Expo Router */
    typedRoutes: true,

    /** Enable React Compiler (auto memoization) */
    reactCompiler: true,
  },
});

export default appConfig;
