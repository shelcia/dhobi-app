import React from "react";

import {
  useFonts,
  FiraSans_100Thin,
  FiraSans_100Thin_Italic,
  FiraSans_200ExtraLight,
  FiraSans_200ExtraLight_Italic,
  FiraSans_300Light,
  FiraSans_300Light_Italic,
  FiraSans_400Regular,
  FiraSans_400Regular_Italic,
  FiraSans_500Medium,
  FiraSans_500Medium_Italic,
} from "@expo-google-fonts/fira-sans";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/Auth/Welcome";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import OTPVerification from "./components/Auth/OTPVerification";
import Loading from "./components/Partials/Loading";

export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    FiraSans_100Thin,
    FiraSans_100Thin_Italic,
    FiraSans_200ExtraLight,
    FiraSans_200ExtraLight_Italic,
    FiraSans_300Light,
    FiraSans_300Light_Italic,
    FiraSans_400Regular,
    FiraSans_400Regular_Italic,
    FiraSans_500Medium,
    FiraSans_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.05,
              shadowRadius: 2.62,
              elevation: 4,
            },
            headerTitleStyle: {
              fontFamily: "FiraSans_100Thin",
            },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="OTP"
            component={OTPVerification}
            options={{ title: "OTP Verification" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
