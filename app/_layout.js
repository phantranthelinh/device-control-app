import * as eva from "@eva-design/eva";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApplicationProvider } from "@ui-kitten/components";
import { default as theme } from "../theme.json";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
const queryClient = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Slot />
        <StatusBar barStyle="light-content" />
      </ApplicationProvider>
    </QueryClientProvider>
  );
}
