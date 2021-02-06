import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoadingIndicator } from "react-native-expo-fancy-alerts";

const Loading = () => {
  return (
    <View style={styles.container}>
      <LoadingIndicator visible={true} />
      <Text style={styles.heading}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#65ABEA",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
