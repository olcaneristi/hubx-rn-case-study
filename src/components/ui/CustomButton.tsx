import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { colors } from "../../constants/colors";
import { CustomButtonProps } from "../../interfaces/types";

const CustomButton = ({
  text,
  textStyle,
  textType = "regular",
  style,
  hasChildren = false,
  children,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      {hasChildren
        ? children
        : text && (
            <CustomText style={textStyle} type={textType}>
              {text}
            </CustomText>
          )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    minHeight: 56,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY_GREEN,
    marginHorizontal: 24,
    marginBottom: 8,
  },
});
