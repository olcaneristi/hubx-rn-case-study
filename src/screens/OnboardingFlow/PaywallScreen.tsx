import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Easing,
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
      style={{
        flex: 1,
        height: "60%",
        backgroundColor: "#101E17",
        paddingLeft: 24,
      }}
    >
      <View style={{ height: "35%" }}>
        <CustomButton
          style={{
            position: "absolute",
            top: "20%",
            right: "8%",
          }}
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
        <View>
          <CustomText type="bold" style={{ color: "white", fontSize: 30 }}>
            PlantApp {""}
            <CustomText type="light" style={{ color: "white", fontSize: 30 }}>
              Premium
            </CustomText>
          </CustomText>

          <CustomText
            type="light"
            style={{
              fontSize: 20,
              color: "white",
              opacity: 0.7,
              paddingTop: 8,
            }}
          >
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
            contentContainerStyle={{ paddingVertical: 8 }}
          />

          <View style={{ marginTop: 16, paddingRight: 24 }}>
            {pricingOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => setSelectedPlan(option.key)}
                style={{
                  marginBottom: 12,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <LinearGradient
                  colors={
                    selectedPlan === option.key
                      ? ["rgba(40, 175, 110, 0)", "rgba(40, 175, 110, 0.24)"]
                      : [
                          "rgba(255, 255, 255, 0.05)",
                          "rgba(255, 255, 255, 0.05)",
                        ]
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    paddingVertical: 14,
                    borderRadius: 14,
                    alignItems: "flex-start",
                    borderWidth: selectedPlan === option.key ? 1.5 : 1,
                    paddingHorizontal: 12,
                    borderColor:
                      selectedPlan === option.key
                        ? "rgba(40, 175, 110, 1)"
                        : "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {option.hasDiscount && selectedPlan === option.key && (
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: "rgba(40, 175, 110, 1)",
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        borderBottomLeftRadius: 14,
                      }}
                    >
                      <CustomText
                        style={{
                          color: "#fff",
                          fontSize: 12,
                        }}
                      >
                        Save 50%
                      </CustomText>
                    </View>
                  )}

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor:
                          selectedPlan === option.key
                            ? "rgba(40, 175, 110, 1)"
                            : "rgba(255, 255, 255, 0.15)",
                        alignItems: "center",
                        backgroundColor:
                          selectedPlan === option.key
                            ? "rgba(40, 175, 110, 1)"
                            : "rgba(255, 255, 255, 0.15)",
                        justifyContent: "center",
                        marginRight: 12,
                      }}
                    >
                      {selectedPlan === option.key && (
                        <View
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: 6,
                            backgroundColor: "white",
                          }}
                        />
                      )}
                    </View>

                    <View>
                      <CustomText
                        style={{
                          color: "#fff",
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {option.title}
                      </CustomText>
                      <CustomText
                        style={{ color: "#aaa", fontSize: 14, marginTop: 4 }}
                      >
                        {option.description}
                      </CustomText>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>

          <CustomButton
            style={{
              backgroundColor: "#28AF6E",
              marginRight: 24,
              marginVertical: 12,
            }}
            onPress={handleOnboardingComplete}
          >
            <CustomText type="medium" style={{ color: "white", fontSize: 16 }}>
              Try free for 3 days
            </CustomText>
          </CustomButton>
        </View>

        <CustomText
          type="light"
          style={{
            color: "rgba(255, 255, 255, 0.52)",
            fontSize: 10,
            textAlign: "center",
            paddingRight: 24,
          }}
        >
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </CustomText>

        <FlatList
          data={termsAndConditions}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            flex: 1,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 12, paddingRight: 24 }}>
              <CustomText
                type="regular"
                style={{
                  color: "rgba(255, 255, 255, 0.52)",
                  fontSize: 11,
                  textAlign: "center",
                }}
              >
                {item.title}
              </CustomText>
            </View>
          )}
        />
      </Animated.View>
    </ImageBackground>
  );
};

export default PaywallScreen;

const styles = StyleSheet.create({});
