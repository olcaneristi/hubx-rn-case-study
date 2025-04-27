import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {};

const CustomButton = ({ children, style, ...props }) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      {children}
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
  },
});
