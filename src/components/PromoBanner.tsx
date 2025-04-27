import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "./ui/CustomText";
import IconMessage from "../../assets/icons/IconMessage";
import IconArrow from "../../assets/icons/IconArrow";
import { colors } from "../constants/colors";

type Props = {};

const PromoBanner = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <IconMessage />
        <View style={styles.textContainer}>
          <CustomText type="semiBold" style={styles.title}>
            FREE Premium Available
          </CustomText>
          <CustomText type="regular" style={styles.subtitle}>
            Tap to upgrade your account!
          </CustomText>
        </View>
      </View>
      <IconArrow rotate={0} />
    </TouchableOpacity>
  );
};

export default PromoBanner;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginVertical: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.BACKGROUND_PROMO,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    paddingLeft: 8,
  },
  title: {
    color: colors.TEXT_PROMO_TITLE,
    fontSize: 17,
    letterSpacing: -0.32,
  },
  subtitle: {
    color: colors.TEXT_PROMO_SUBTITLE,
    fontSize: 14,
  },
});
