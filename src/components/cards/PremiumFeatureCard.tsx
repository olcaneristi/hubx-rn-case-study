import React from "react";
import { View } from "react-native";
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
    <View
      style={{
        marginVertical: 16,
        marginRight: 8,
        borderRadius: 14,
        padding: 16,
        minWidth: 170,
        minHeight: 130,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      {icon}
      <View style={{ paddingTop: 12 }}>
        <CustomText
          type="medium"
          style={{ color: "white", fontSize: 22, letterSpacing: 0.38 }}
        >
          {title}
        </CustomText>
        <CustomText
          type="regular"
          style={{
            fontSize: 14,
            color: "white",
            opacity: 0.7,
            paddingTop: 4,
            letterSpacing: -0.08,
          }}
        >
          {description}
        </CustomText>
      </View>
    </View>
  );
};

export default PremiumFeatureCard;
