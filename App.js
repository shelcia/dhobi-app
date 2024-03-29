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
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/Auth/Welcome";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import OTPVerification from "./components/Auth/OTPVerification";
import Loading from "./components/Partials/Loading";
import HomePage from "./components/Dashboard/HomePage";
import AddOrder from "./components/Order/AddOrder";
import Areas from "./components/Dashboard/Areas";
import EstimatedCost from "./components/Order/EstimatedCost";
import { OrderProvider } from "./components/Context/OrderContext";
import { AmountProvider } from "./components/Context/AmountContext";
import { PickupProvider } from "./components/Context/PickupContext";
import AddAddress from "./components/Auth/AddAdress";
import AddPickup from "./components/Order/AddPickup";
import OrderDetails from "./components/Order/OrderDetails";
import SuccesfullyPlaced from "./components/Order/SuccesfullyPlaced";
import Order from "./components/Order/Orders";
import PostOrderDetails from "./components/Order/PostOrderDetails";
import Profile from "./components/Profile/Profile";

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
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else
    return (
      <OrderProvider>
        <AmountProvider>
          <PickupProvider>
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
                    fontFamily: "JosefinSans_300Light",
                    color: "#65ABEA",
                  },
                }}
              >
                <Stack.Screen
                  name="Welcome"
                  component={Welcome}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomePage"
                  component={HomePage}
                  options={{
                    title: "Vanakkam!!",
                    headerBackAccessibilityLabel: "",
                  }}
                />
                <Stack.Screen
                  name="Areas"
                  component={Areas}
                  options={{ title: "Areas Available" }}
                />
                <Stack.Screen
                  name="AddOrder"
                  component={AddOrder}
                  options={{ title: "Place Order!!" }}
                />
                <Stack.Screen
                  name="EstimatedCost"
                  component={EstimatedCost}
                  options={{ title: "Estimated Cost" }}
                />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen
                  name="OTP"
                  component={OTPVerification}
                  options={{ title: "OTP Verification" }}
                />
                <Stack.Screen
                  name="AddAddress"
                  component={AddAddress}
                  options={{ title: "Add Address" }}
                />
                <Stack.Screen
                  name="AddPickup"
                  component={AddPickup}
                  options={{ title: "Add Pickup" }}
                />
                <Stack.Screen
                  name="OrderDetails"
                  component={OrderDetails}
                  options={{ title: "Order Details" }}
                />
                <Stack.Screen
                  name="SuccesfullyPlaced"
                  component={SuccesfullyPlaced}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Order"
                  component={Order}
                  options={{ title: "My Orders" }}
                />
                <Stack.Screen
                  name="PostOrderDetails"
                  component={PostOrderDetails}
                  options={{ title: "Order Details" }}
                />
                <Stack.Screen
                  name="Profile"
                  component={Profile}
                  options={{ title: "Profile" }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PickupProvider>
        </AmountProvider>
      </OrderProvider>
    );
}
