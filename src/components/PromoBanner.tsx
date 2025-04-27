import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "./ui/CustomText";
import IconMessage from "../../assets/icons/IconMessage";
import IconArrow from "../../assets/icons/IconArrow";

type Props = {};

const PromoBanner = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 24,
        marginVertical: 24,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "rgba(36, 32, 26, 1)",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconMessage />
        <View style={{ flexDirection: "column", paddingLeft: 8 }}>
          <CustomText
            type="semiBold"
            style={{
              color: "rgba(229, 201, 144, 1)",
              fontSize: 17,
              letterSpacing: -0.32,
            }}
          >
            FREE Premium Available
          </CustomText>
          <CustomText
            type="regular"
            style={{ color: "rgba(245, 194, 91, 1)", fontSize: 14 }}
          >
            Tap to upgrade your account!
          </CustomText>
        </View>
      </View>

      <IconArrow rotate={0} />
    </TouchableOpacity>
  );
};

export default PromoBanner;

const styles = StyleSheet.create({});
