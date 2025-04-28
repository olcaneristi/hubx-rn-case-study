import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Router from "./src/navigation/Router";
import { useFonts } from "expo-font";
import { fonts } from "./src/constants/fonts";
import { store } from "./src/store";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    [fonts.light]: require("./assets/fonts/Rubik-Light.ttf"),
    [fonts.regular]: require("./assets/fonts/Rubik-Regular.ttf"),
    [fonts.medium]: require("./assets/fonts/Rubik-Medium.ttf"),
    [fonts.semiBold]: require("./assets/fonts/Rubik-SemiBold.ttf"),
    [fonts.bold]: require("./assets/fonts/Rubik-Bold.ttf"),
    [fonts.extraBold]: require("./assets/fonts/Rubik-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
