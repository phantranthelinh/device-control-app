import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
const MainScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primary,
        flex: 1,
      }}
    >
      <View
        style={{
          paddingHorizontal: SIZES.large,
          marginTop: SIZES.medium,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: SIZES.small,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.xLarge,
              fontWeight: "600",
              color: COLORS.white,
            }}
          >
            Thiết bị
          </Text>
          <TouchableOpacity onPress={() => router.navigate("/device/add")}>
            <FontAwesome6 name="add" size={30} color={COLORS.hightlight} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
