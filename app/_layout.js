import * as eva from "@eva-design/eva";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApplicationProvider } from "@ui-kitten/components";
import { Slot, SplashScreen } from "expo-router";
import { useState } from "react";
import { StatusBar } from "react-native";
import { default as theme } from "../theme.json";
const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Slot />
        <StatusBar barStyle="light-content" />
      </ApplicationProvider>
    </QueryClientProvider>
  );
}
