import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomText from "./CustomText";

const CustomHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require("../../../assets/images/header-bg.png")}
      style={[styles.container, { paddingTop: insets.top }]}
      resizeMode="cover"
    >
      <View>
        <CustomText style={styles.smallText}>Hi, plant lover!</CustomText>
        <CustomText style={styles.largeText}>
          Good Afternoon! <Text>☁️</Text>
        </CustomText>

        <TextInput
          placeholder="Search for plants"
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>
    </ImageBackground>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  smallText: {
    fontSize: 16,
    color: "#333",
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderRadius: 12,
    paddingHorizontal: 24,
    minHeight: 44,
    borderWidth: 0.2,
    borderColor: "rgba(60, 60, 67, 0.25)",
  },
});
