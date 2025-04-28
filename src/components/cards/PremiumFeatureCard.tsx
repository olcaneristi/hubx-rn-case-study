import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../ui/CustomText";
import { colors } from "../../constants/colors";
import { PremiumFeatureCardProps } from "../../interfaces/types";

const PremiumFeatureCard = ({
  title,
  description,
  icon,
}: PremiumFeatureCardProps) => {
  return (
    <View style={styles.cardContainer}>
      {icon}
      <View style={styles.textContainer}>
        <CustomText type="medium" style={styles.title}>
          {title}
        </CustomText>
        <CustomText type="regular" style={styles.description}>
          {description}
        </CustomText>
      </View>
    </View>
  );
};

export default PremiumFeatureCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 16,
    marginRight: 8,
    borderRadius: 14,
    padding: 16,
    minWidth: 170,
    minHeight: 130,
    backgroundColor: colors.BACKGROUND_PREMIUM_CARD,
  },
  textContainer: {
    paddingTop: 12,
  },
  title: {
    color: colors.TEXT_WHITE,
    fontSize: 22,
    letterSpacing: 0.38,
  },
  description: {
    fontSize: 14,
    color: colors.TEXT_WHITE,
    opacity: 0.7,
    paddingTop: 4,
    letterSpacing: -0.08,
  },
});
