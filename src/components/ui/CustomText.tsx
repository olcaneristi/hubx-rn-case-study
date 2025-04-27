import { Animated, StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";
import { fonts } from "../../constants/fonts";

type FontType = keyof typeof fonts;

interface CustomTextProps extends TextProps {
  type?: FontType; // light, regular, medium, semiBold, bold, extraBold
  isAnimated?: boolean;
}

const CustomText = ({
  children,
  type = "regular",
  style,
  isAnimated = false,
  ...props
}: CustomTextProps) => {
  const TextComponent = isAnimated ? Animated.Text : Text;

  return (
    <TextComponent
      {...props}
      style={[{ fontFamily: fonts[type] }, styles.text, style]}
    >
      {children}
    </TextComponent>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    letterSpacing: 0.07,
  },
});
