import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getOnboardingCompleted } from "../api/storage";
import { colors } from "../constants/colors";
import CustomText from "../components/ui/CustomText";

import GetStartedIntroScreen from "../../src/screens/OnboardingFlow/GetStartedIntroScreen";
import OnboardingScreen from "../../src/screens/OnboardingFlow/OnboardingScreen";
import PaywallScreen from "../../src/screens/OnboardingFlow/PaywallScreen";

import HomeScreen from "../../src/screens/HomeScreen";
import DiagnoseScreen from "../../src/screens/DiagnoseScreen";
import ScanPlantScreen from "../screens/ScanPlantScreen";
import MyGardenScreen from "../../src/screens/MyGardenScreen";
import ProfileScreen from "../../src/screens/ProfileScreen";

import IconHome from "../../assets/icons/IconHome";
import IconScan from "../../assets/icons/IconScan";
import IconDiagnose from "../../assets/icons/IconDiagnose";
import IconLeaf from "../../assets/icons/IconLeaf";
import IconProfile from "../../assets/icons/IconProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconStyle = {};

          if (route.name === "HomeScreen") {
            iconName = focused ? (
              <IconHome color={colors.PRIMARY_GREEN} />
            ) : (
              <IconHome />
            );
          } else if (route.name === "ScanPlantScreen") {
            iconName = <IconScan />;
            iconStyle = styles.scanIconContainer;
          } else if (route.name === "DiagnoseScreen") {
            iconName = focused ? (
              <IconDiagnose color={colors.PRIMARY_GREEN} />
            ) : (
              <IconDiagnose />
            );
          } else if (route.name === "MyGardenScreen") {
            iconName = focused ? (
              <IconLeaf color={colors.PRIMARY_GREEN} />
            ) : (
              <IconLeaf />
            );
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? (
              <IconProfile color={colors.PRIMARY_GREEN} />
            ) : (
              <IconProfile />
            );
          }

          return <View style={iconStyle}>{iconName}</View>;
        },
        tabBarActiveTintColor: colors.BLACK,
        tabBarInactiveTintColor: colors.TEXT_SECONDARY,
        tabBarStyle: {
          ...styles.tabBarStyle,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 5,
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomText
              style={focused ? styles.tabLabelFocused : styles.tabLabel}
            >
              Home
            </CustomText>
          ),
        }}
      />
      <Tab.Screen
        name="DiagnoseScreen"
        component={DiagnoseScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomText
              style={focused ? styles.tabLabelFocused : styles.tabLabel}
            >
              Diagnose
            </CustomText>
          ),
        }}
      />
      <Tab.Screen
        name="ScanPlantScreen"
        component={ScanPlantScreen}
        options={{
          tabBarLabel: () => (
            <CustomText style={styles.emptyLabel}></CustomText>
          ),
        }}
      />
      <Tab.Screen
        name="MyGardenScreen"
        component={MyGardenScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomText
              style={focused ? styles.tabLabelFocused : styles.tabLabel}
            >
              My Garden
            </CustomText>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomText
              style={focused ? styles.profileTabLabelFocused : styles.tabLabel}
            >
              Profile
            </CustomText>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const completed = await getOnboardingCompleted();
      setInitialRoute(completed ? "BottomTabs" : "GetStartedIntroScreen");
    };
    checkOnboardingStatus();
  }, []);

  if (!initialRoute) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.PRIMARY_GREEN} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="GetStartedIntroScreen"
          component={GetStartedIntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaywallScreen"
          component={PaywallScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarStyle: {
    borderTopWidth: 0.25,
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: colors.BACKGROUND_WHITE,
    borderTopColor: colors.BORDER_LIGHT,
  },
  tabLabel: {
    fontSize: 12,
    color: colors.TEXT_SECONDARY,
  },
  tabLabelFocused: {
    fontSize: 12,
    color: colors.PRIMARY_GREEN,
  },
  profileTabLabelFocused: {
    fontSize: 12,
    color: colors.PRIMARY_GREEN,
  },
  emptyLabel: {
    fontSize: 12,
    color: colors.TRANSPARENT,
  },
  scanIconContainer: {
    position: "absolute",
    top: -40,
    backgroundColor: colors.PRIMARY_GREEN,
    borderRadius: 50,
    elevation: 6,
    zIndex: 10,
    padding: 20,
  },
});
