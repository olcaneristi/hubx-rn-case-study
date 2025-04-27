import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
import { getOnboardingCompleted } from "../api/storage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconStyle = {};
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = focused ? <IconHome color={"#28AF6E"} /> : <IconHome />;
          } else if (route.name === "ScanPlantScreen") {
            iconName = <IconScan />;
            iconStyle = {
              position: "absolute",
              top: -40,
              backgroundColor: "#28AF6E",
              borderRadius: 50,
              elevation: 6,
              zIndex: 10,
              padding: 20,
            };
          } else if (route.name === "DiagnoseScreen") {
            iconName = focused ? (
              <IconDiagnose color={"#28AF6E"} />
            ) : (
              <IconDiagnose />
            );
          } else if (route.name === "MyGardenScreen") {
            iconName = focused ? <IconLeaf color={"#28AF6E"} /> : <IconLeaf />;
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? (
              <IconProfile color={"#28AF6E"} />
            ) : (
              <IconProfile />
            );
          }
          return <View style={iconStyle}>{iconName}</View>;
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#A1ADC4",
        tabBarStyle: {
          borderTopWidth: 0.25,
          alignContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          borderTopColor: "#BDBDBD",
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 5,
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "rgba(40, 175, 110, 1)" : "#979798",
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="DiagnoseScreen"
        component={DiagnoseScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "rgba(40, 175, 110, 1)" : "#979798",
                fontSize: 12,
              }}
            >
              Diagnose
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="ScanPlantScreen"
        component={ScanPlantScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "rgba(40, 175, 110, 1)" : "#979798",
                fontSize: 12,
              }}
            ></Text>
          ),
        }}
      />
      <Tab.Screen
        name="MyGardenScreen"
        component={MyGardenScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "rgba(40, 175, 110, 1)" : "#979798",
                fontSize: 12,
              }}
            >
              My Garden
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "green" : "#979798", fontSize: 12 }}
            >
              Profile
            </Text>
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#28AF6E" />
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
