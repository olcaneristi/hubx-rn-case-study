import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CustomText from "../../components/ui/CustomText";
import IconClose from "../../../assets/icons/IconClose";
import CustomButton from "../../components/ui/CustomButton";
import IconScanOutline from "../../../assets/icons/IconScanOutline";
import IconFast from "../../../assets/icons/IconFast";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import PremiumFeatureCard from "../../components/cards/PremiumFeatureCard";
import { setOnboardingCompleted } from "../../api/storage";
import CustomRadioGroup from "../../components/ui/CustomRadioGroup";

type Props = {};

const allFeatures = [
  {
    id: 1,
    title: "Unlimited",
    description: "Plant Identify",
    icon: <IconScanOutline />,
  },
  {
    id: 2,
    title: "Faster",
    description: "Process",
    icon: <IconFast />,
  },
  {
    id: 3,
    title: "Detailed",
    description: "Plant Care",
    icon: <IconFast />,
  },
];

const pricingOptions = [
  {
    id: 1,
    key: "monthly",
    title: "1 Month",
    description: "$2.99/month, auto renewable",
    hasDiscount: false,
  },
  {
    id: 2,
    key: "yearly",
    title: "1 Year",
    description: "First 3 days free, then $529.99/year",
    hasDiscount: true,
  },
];

const termsAndConditions = [
  {
    id: 1,
    title: "Terms",
  },
  {
    id: 2,
    title: "Privacy",
  },
  {
    id: 3,
    title: "Restore",
  },
];

const PaywallScreen = (props: Props) => {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState("yearly");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  }, []);

  const handleOnboardingComplete = async () => {
    await setOnboardingCompleted();
    navigation.reset({
      index: 0,
      routes: [{ name: "BottomTabs" }],
    });
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/paywall-bg-image.png")}
      resizeMode="cover"
      style={styles.imageBgContainer}
      blurRadius={2}
    >
      <View style={styles.iconContainer}>
        <CustomButton
          hasChildren
          style={styles.iconButton}
          onPress={handleOnboardingComplete}
        >
          <IconClose />
        </CustomButton>
      </View>

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        }}
      >
        <CustomText type="bold" style={styles.title}>
          PlantApp {""}
          <CustomText type="light" style={styles.title}>
            Premium
          </CustomText>
        </CustomText>

        <CustomText type="light" style={styles.subTitle}>
          Access All Features
        </CustomText>

        <FlatList
          data={allFeatures}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PremiumFeatureCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalContainer}
        />

        <CustomRadioGroup
          options={pricingOptions}
          selectedPlan={selectedPlan}
          onSelectPlan={setSelectedPlan}
        />

        <CustomButton
          text={"Try free for 3 days"}
          textType={"medium"}
          textStyle={styles.buttonText}
          style={styles.buttonContainer}
          onPress={handleOnboardingComplete}
        />

        <CustomText type="light" style={styles.informationText}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </CustomText>

        <View style={styles.termsListContainer}>
          {termsAndConditions.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.termsListInnerContainer}
            >
              <CustomText type="regular" style={styles.termsListTitle}>
                {item.title}
              </CustomText>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

export default PaywallScreen;

const styles = StyleSheet.create({
  imageBgContainer: {
    flex: 1,
    height: Platform.OS === "android" ? "50%" : "55%",
    backgroundColor: "#101E17",
    paddingLeft: 24,
  },
  iconContainer: {
    height: Platform.OS === "android" ? "25%" : "30%",
  },
  iconButton: {
    position: "absolute",
    top: "20%",
    right: "5%",
    backgroundColor: "transparent",
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  subTitle: {
    fontSize: 20,
    color: "white",
    opacity: 0.7,
    paddingTop: 4,
  },
  horizontalContainer: {
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 12,
    marginLeft: 0,
  },
  informationText: {
    color: "rgba(255, 255, 255, 0.52)",
    fontSize: 10,
    textAlign: "center",
    paddingRight: 24,
  },
  termsListContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  termsListInnerContainer: {
    marginTop: 12,
    paddingRight: 24,
  },
  termsListTitle: {
    color: "rgba(255, 255, 255, 0.52)",
    fontSize: 11,
    textAlign: "center",
  },
});
