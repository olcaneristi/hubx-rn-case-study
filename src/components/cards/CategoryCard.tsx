import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CustomText from "../ui/CustomText";

type Props = {
  title: string;
  imageUri: string;
};

const CategoryCard = ({ title, imageUri }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => alert("Hello!")}>
      <ImageBackground
        source={{ uri: imageUri }}
        style={styles.imageBg}
        imageStyle={styles.imageStyle}
      />
      <View style={styles.textContainer}>
        <CustomText type="medium" style={styles.title}>
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 152,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "rgba(41, 187, 137, 0.18)",
    backgroundColor: "#F8FAF8",
    overflow: "hidden",
    justifyContent: "center",
  },
  imageBg: {
    ...StyleSheet.absoluteFillObject,
  },
  imageStyle: {
    resizeMode: "contain",
    right: -25,
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
