import AsyncStorage from "@react-native-async-storage/async-storage";

const ONBOARDING_KEY = "onboardingCompleted";

export const setOnboardingCompleted = async () => {
  try {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");
  } catch (error) {
    console.error("Set onboarding completed failed!", error);
  }
};

export const getOnboardingCompleted = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(ONBOARDING_KEY);
    return value === "true";
  } catch (error) {
    console.error("Check onboarding status failed!", error);
    return false;
  }
};

export const clearOnboardingData = async () => {
  try {
    await AsyncStorage.removeItem(ONBOARDING_KEY);
    console.log("Onboarding data clear successfully.");
  } catch (error) {
    console.error("Clear onboarding data error!", error);
  }
};