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

type Props = {};

const GetStartedIntroScreen = (props: Props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? insets.top : 0,
      }}
    >
      <View style={{ paddingVertical: 16 }}>
        <View style={{ paddingHorizontal: 24, marginTop: 16 }}>
          <CustomText style={{ fontSize: 28 }}>
            Welcome to{" "}
            <CustomText type="bold" style={{ fontSize: 28 }}>
              PlantApp
            </CustomText>
          </CustomText>

          <CustomText
            style={{ color: "#13231BB2", fontSize: 16, paddingTop: 8 }}
          >
            Identify more than 3000+ plants and 88% accuracy.
          </CustomText>
        </View>

        <Image
          source={require("../../../assets/images/get-started-image.png")}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "65%",
            marginTop: 24,
          }}
        />

        <CustomButton
          style={{
            backgroundColor: "#28AF6E",
            marginHorizontal: 24,
            marginBottom: 8,
          }}
          onPress={() => navigation.navigate("OnboardingScreen")}
        >
          <CustomText type="semiBold" style={{ color: "white", fontSize: 15 }}>
            Get Started
          </CustomText>
        </CustomButton>

        <View style={styles.agreementContainer}>
          <CustomText style={styles.agreementText}>
            By tapping next, you are agreeing to PlantID
            <CustomText
              style={[
                styles.agreementText,
                { textDecorationLine: "underline" },
              ]}
            >
              {" "}
              Terms of Use
            </CustomText>{" "}
            &
            <CustomText
              style={[
                styles.agreementText,
                { textDecorationLine: "underline" },
              ]}
            >
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
  agreementContainer: {
    width: "60%",
    marginTop: 16,
    alignSelf: "center",
    justifyContent: "center",
  },
  agreementText: {
    fontSize: 12,
    color: "#13231BB2",
    textAlign: "center",
  },
});
