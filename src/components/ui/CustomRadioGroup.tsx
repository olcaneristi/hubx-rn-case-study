import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../ui/CustomText";

type PricingOption = {
  id: number;
  key: string;
  title: string;
  description: string;
  hasDiscount: boolean;
};

type Props = {
  options: PricingOption[];
  selectedPlan: string;
  onSelectPlan: (planKey: string) => void;
};

const CustomRadioGroup = ({ options, selectedPlan, onSelectPlan }: Props) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => onSelectPlan(option.key)}
          style={styles.radioButtonContainer}
        >
          <LinearGradient
            colors={
              selectedPlan === option.key
                ? ["rgba(40, 175, 110, 0)", "rgba(40, 175, 110, 0.24)"]
                : ["rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.05)"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.radioButton,
              {
                borderWidth: selectedPlan === option.key ? 1.5 : 1,
                borderColor:
                  selectedPlan === option.key
                    ? "rgba(40, 175, 110, 1)"
                    : "rgba(255, 255, 255, 0.3)",
              },
            ]}
          >
            {option.hasDiscount && selectedPlan === option.key && (
              <View style={styles.discountContainer}>
                <CustomText style={styles.discountText}>Save 50%</CustomText>
              </View>
            )}

            <View style={styles.radioButtonCircleContainer}>
              <View
                style={[
                  styles.radioButtonCircle,
                  {
                    backgroundColor:
                      selectedPlan === option.key
                        ? "rgba(40, 175, 110, 1)"
                        : "rgba(255, 255, 255, 0.15)",
                    borderColor:
                      selectedPlan === option.key
                        ? "rgba(40, 175, 110, 1)"
                        : "rgba(255, 255, 255, 0.15)",
                  },
                ]}
              >
                {selectedPlan === option.key && (
                  <View style={styles.radioButtonInnerCircle} />
                )}
              </View>

              <View>
                <CustomText style={styles.radioButtonTitle}>
                  {option.title}
                </CustomText>
                <CustomText style={styles.radioButtonDesc}>
                  {option.description}
                </CustomText>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomRadioGroup;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingRight: 24,
  },
  radioButton: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "flex-start",
    paddingHorizontal: 12,
  },
  discountContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(40, 175, 110, 1)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomLeftRadius: 14,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
  },
  radioButtonContainer: {
    marginBottom: 12,
    position: "relative",
    overflow: "hidden",
  },
  radioButtonCircleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  radioButtonInnerCircle: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  radioButtonTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  radioButtonDesc: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
});
