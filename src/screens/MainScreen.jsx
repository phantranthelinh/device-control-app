import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import { Button, Layout } from "@ui-kitten/components";
const MainScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primary,
        flex: 1,
      }}
    >
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button>HOME</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default MainScreen;
