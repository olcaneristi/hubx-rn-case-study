import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { fonts } from "../../constants/fonts";
import { colors } from "../../constants/colors";

type FontType = keyof typeof fonts;

type Props = {
  text?: string;
  textStyle?: TextStyle;
  textType?: FontType;
  style?: ViewStyle;
  hasChildren?: boolean;
  children?: React.ReactNode;
} & TouchableOpacityProps;

const CustomButton: React.FC<Props> = ({
  text,
  textStyle,
  textType = "regular",
  style,
  hasChildren = false,
  children,
  ...props
}) => {
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
