import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  useFonts,
  CourierPrime_400Regular,
  CourierPrime_400Regular_Italic,
  CourierPrime_700Bold,
  CourierPrime_700Bold_Italic,
} from "@expo-google-fonts/courier-prime";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
