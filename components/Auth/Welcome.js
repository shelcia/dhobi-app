import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppButton from "../styles/Button";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo-outline.png")} />
      <Text style={styles.heading}>Mr Ironing</Text>
      <Text style={styles.caption}>
        Get ready to experience an app to make your life easier by taking care
        of all your ironing needs.
      </Text>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Get Started"
          size="sm"
          backgroundColor="#398E3D"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontFamily: "JosefinSans_600SemiBold",
    color: "#fff",
    marginTop: 30,
  },
  caption: {
    fontSize: 20,
    fontFamily: "JosefinSans_400Regular",
    color: "#fff",
    marginVertical: 20,
    paddingHorizontal: 40,
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#65ABEA",
  },
  buttonContainer: {
    marginTop: 80,
    alignItems: "center",
  },
});

export default Welcome;
