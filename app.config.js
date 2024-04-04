export default {
  name: "device-control-app",
  slug: "device-control-app",
  scheme: "AndroidApp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    googleServicesFile: "./google-services.json",
    package: "com.alexphn.devicecontrol",
  },
  web: {
    favicon: "./assets/favicon.png",
    build: { babel: { include: ["@ui-kitten/components"] } },
    "bundler": "metro"
  },
  extra: {
    eas: {
      projectId: "db248fae-86a8-4ea1-830e-e0bd7bd46533",
    },
  },
  plugins: [
    "expo-router",
    [
      "expo-build-properties",
      {
        android: {
          usesCleartextTraffic: true,
        },
      },
    ],
  ],
};
