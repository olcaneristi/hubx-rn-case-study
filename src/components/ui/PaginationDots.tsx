import React from "react";
import { View, StyleSheet } from "react-native";

type PaginationDotsProps = {
  totalSteps: number;
  currentStep: number;
};

const PaginationDots = ({ totalSteps, currentStep }: PaginationDotsProps) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentStep === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

export default PaginationDots;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 100,
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(19, 35, 27, 1)",
  },
  inactiveDot: {
    backgroundColor: "#D3D3D3",
  },
});
