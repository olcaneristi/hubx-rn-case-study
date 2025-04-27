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
import CustomSearchBar from "./CustomSearchBar";
import { getGreeting } from "../../utils/helper";

const CustomHeader = () => {
  const insets = useSafeAreaInsets();
  const { greeting, emoji } = getGreeting();
  return (
    <ImageBackground
      source={require("../../../assets/images/header-bg.png")}
      style={[styles.container, { paddingTop: insets.top }]}
      resizeMode="cover"
    >
      <View>
        <CustomText style={styles.smallText}>Hi, plant lover!</CustomText>
        <CustomText type="medium" style={styles.largeText}>
          {greeting} <Text>{emoji}</Text>
        </CustomText>

        <CustomSearchBar placeholder="Search for plants" />
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
    color: "#13231B",
    letterSpacing: 0.07,
  },
  largeText: {
    fontSize: 24,
    color: "#13231B",
    letterSpacing: 0.35,
  },
});
