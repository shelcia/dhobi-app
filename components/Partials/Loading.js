import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoadingIndicator } from "react-native-expo-fancy-alerts";
import { globalStyles } from "../styles/GlobalStyles";

const Loading = () => {
  return (
    <View style={styles.container}>
      <LoadingIndicator visible={true} />
      <Text style={globalStyles.headTitle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#65ABEA",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
