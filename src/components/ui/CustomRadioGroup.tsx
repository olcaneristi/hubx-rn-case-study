import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../ui/CustomText";
import { colors } from "../../constants/colors";
import { SelectedPlanProps } from "../../interfaces/types";

const CustomRadioGroup = ({
  options,
  selectedPlan,
  onSelectPlan,
}: SelectedPlanProps) => {
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
                ? [
                    colors.BACKGROUND_RADIO_SELECTED_GRADIENT_START,
                    colors.BACKGROUND_RADIO_SELECTED_GRADIENT_END,
                  ]
                : [
                    colors.BACKGROUND_RADIO_UNSELECTED_GRADIENT,
                    colors.BACKGROUND_RADIO_UNSELECTED_GRADIENT,
                  ]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.radioButton,
              {
                borderWidth: selectedPlan === option.key ? 1.5 : 1,
                borderColor:
                  selectedPlan === option.key
                    ? colors.BORDER_RADIO_SELECTED
                    : colors.BORDER_RADIO_UNSELECTED,
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
                        ? colors.RADIO_CIRCLE_SELECTED
                        : colors.RADIO_CIRCLE_UNSELECTED,
                    borderColor:
                      selectedPlan === option.key
                        ? colors.RADIO_CIRCLE_SELECTED
                        : colors.RADIO_CIRCLE_UNSELECTED,
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
    backgroundColor: colors.BORDER_RADIO_SELECTED,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomLeftRadius: 14,
  },
  discountText: {
    color: colors.TEXT_WHITE,
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
    backgroundColor: colors.BACKGROUND_WHITE,
  },
  radioButtonTitle: {
    color: colors.TEXT_WHITE,
    fontSize: 18,
  },
  radioButtonDesc: {
    color: colors.TEXT_LIGHT,
    fontSize: 14,
    marginTop: 4,
  },
});
