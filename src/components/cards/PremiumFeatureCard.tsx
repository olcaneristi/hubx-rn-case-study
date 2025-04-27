import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../ui/CustomText";

type PremiumFeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  textContainer: {
    paddingTop: 12,
  },
  title: {
    color: "white",
    fontSize: 22,
    letterSpacing: 0.38,
  },
  description: {
    fontSize: 14,
    color: "white",
    opacity: 0.7,
    paddingTop: 4,
    letterSpacing: -0.08,
  },
});
