import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CustomText from "../ui/CustomText";

type Props = {
  title: string;
  imageUri: string;
};

const CategoryCard = ({ title, imageUri }: Props) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: imageUri }}
        style={styles.image}
        imageStyle={{ resizeMode: "contain", right: -20 }}
      />
      <View style={styles.textContainer}>
        <CustomText type="medium" style={styles.title}>
          {title}
        </CustomText>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 152,
    borderRadius: 20,
    backgroundColor: "#F8FAF8",
    overflow: "hidden",
    justifyContent: "center",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    textAlignVertical: "top",
    justifyContent: "flex-start",
    flex: 1,
    width: "75%",
  },
  title: {
    color: "rgba(19, 35, 27, 1)",
    fontSize: 17,
  },
});
