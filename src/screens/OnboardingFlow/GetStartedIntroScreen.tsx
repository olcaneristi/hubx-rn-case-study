import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CustomText from "../../components/ui/CustomText";
import CustomButton from "../../components/ui/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";

type Props = {};

const GetStartedIntroScreen = (props: Props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS === "android" ? insets.top : 0 },
      ]}
    >
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <CustomText style={styles.text}>
            Welcome to{" "}
            <CustomText type="bold" style={styles.text}>
              PlantApp
            </CustomText>
          </CustomText>

          <CustomText style={styles.subText}>
            Identify more than 3000+ plants and 88% accuracy.
          </CustomText>
        </View>

        <Image
          source={require("../../../assets/images/get-started-image.png")}
          resizeMode="contain"
          style={styles.heroImage}
        />

        <CustomButton
          onPress={() => navigation.navigate("OnboardingScreen")}
          text={"Get Started"}
          textType={"semiBold"}
          textStyle={styles.buttonText}
        />

        <View style={styles.agreementContainer}>
          <CustomText style={styles.agreementText}>
            By tapping next, you are agreeing to PlantID
            <CustomText style={[styles.agreementText, styles.underlineText]}>
              {" "}
              Terms of Use
            </CustomText>{" "}
            &
            <CustomText style={[styles.agreementText, styles.underlineText]}>
              {" "}
              Privacy Policy.
            </CustomText>
          </CustomText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_WHITE,
  },
  innerContainer: {
    paddingVertical: 16,
  },
  textContainer: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
  text: {
    fontSize: 28,
  },
  subText: {
    color: colors.DARK_GREEN_TRANSPARENT,
    fontSize: 16,
    paddingTop: 8,
  },
  heroImage: {
    width: "100%",
    height: "65%",
    marginTop: 24,
  },
  buttonText: {
    color: colors.TEXT_WHITE,
    fontSize: 15,
  },
  agreementContainer: {
    width: "60%",
    marginTop: 16,
    alignSelf: "center",
    justifyContent: "center",
  },
  agreementText: {
    fontSize: 12,
    color: colors.LIGHT_GREEN_TRANSPARENT,
    textAlign: "center",
  },
  underlineText: {
    textDecorationLine: "underline",
  },
});
