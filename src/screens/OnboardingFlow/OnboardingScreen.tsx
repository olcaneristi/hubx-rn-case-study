import {
  Animated,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import CustomText from "../../components/ui/CustomText";
import CustomButton from "../../components/ui/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PaginationDots from "../../components/ui/PaginationDots";

type Props = {};

const onboardingSteps = [
  {
    id: 1,
    title: "Take a photo to identify the plant!",
    image: require("../../../assets/images/onboarding-scan-image.png"),
  },
  {
    id: 2,
    title: "Get plant care guides",
    image: require("../../../assets/images/onboarding-plant-detail-image.png"),
  },
];

const OnboardingScreen = (props: Props) => {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const navigation = useNavigation();

  const handleContinue = () => {
    if (step === onboardingSteps.length - 1) {
      navigation.navigate("PaywallScreen");
      return;
    }
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setStep((prev) => (prev + 1) % onboardingSteps.length);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={{ flex: 1, marginVertical: 16 }}>
        <ImageBackground
          source={require("../../../assets/images/onboarding-bg-image.png")}
          resizeMode="contain"
          style={{
            flex: 1,
          }}
          blurRadius={60}
        >
          <CustomText
            isAnimated
            type="medium"
            style={[styles.title, { opacity: fadeAnim }]}
          >
            {onboardingSteps[step].title}
          </CustomText>

          <View>
            <Animated.Image
              source={onboardingSteps[step].image}
              resizeMode="contain"
              style={[
                styles.image,
                {
                  opacity: fadeAnim,
                  marginTop: onboardingSteps[step].id === 1 ? 0 : 36,
                },
              ]}
            />

            {onboardingSteps[step].id === 2 && (
              <Animated.Image
                source={require("../../../assets/images/onboarding-external-plant.png")}
                resizeMode="contain"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 20,
                  opacity: fadeAnim,
                }}
              />
            )}
          </View>
          <BlurView
            intensity={5}
            style={{
              position: "absolute",
              width: "100%",
              paddingTop: 40,
              bottom: "10%",
            }}
          >
            <CustomButton
              style={{
                backgroundColor: "#28AF6E",
                marginHorizontal: 24,
                marginBottom: 8,
              }}
              activeOpacity={0.95}
              onPress={handleContinue}
            >
              <CustomText
                type="semiBold"
                style={{ color: "white", fontSize: 15 }}
              >
                Continue
              </CustomText>
            </CustomButton>

            <PaginationDots
              totalSteps={onboardingSteps.length}
              currentStep={step}
            />
          </BlurView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    marginVertical: 16,
    paddingHorizontal: 24,
    letterSpacing: -1,
  },
  image: {
    width: "100%",
    position: "relative",
  },
  paginationContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: "100%",
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: "#34C759",
  },
  inactiveDot: {
    backgroundColor: "#D3D3D3",
  },
  button: {
    backgroundColor: "#34C759",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
