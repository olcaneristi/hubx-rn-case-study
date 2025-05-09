import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../ui/CustomText";
import { colors } from "../../constants/colors";
import { QuestionCardProps } from "../../interfaces/types";

const QuestionCard = ({ title, subtitle, imageUri }: QuestionCardProps) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        alert("Hello!");
      }}
    >
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <CustomText
          type="medium"
          style={styles.title}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </CustomText>
      </View>
    </Pressable>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  card: {
    width: 270,
    minHeight: 180,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: colors.BLACK,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },

  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  title: {
    color: colors.TEXT_WHITE,
    fontSize: 16,
    letterSpacing: -0.24,
    minHeight: 30,
  },
});
