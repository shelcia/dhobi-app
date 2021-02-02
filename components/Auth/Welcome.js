import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import AppButton from "../styles/Button";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/splash.png")}
        style={styles.image}
      >
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.caption}>Lorem ipsum dolor.</Text>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            size="sm"
            backgroundColor="#398E3D"
            onPress={() => navigation.navigate("Login")}
          />
          <Text
            style={{
              marginBottom: 20,
              color: "#fff",
              fontFamily: "CourierPrime_400Regular",
            }}
          >
            OR
          </Text>
          <AppButton
            title="Signup"
            size="sm"
            backgroundColor="#398E3D"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontFamily: "CourierPrime_400Regular",
    color: "#fff",
  },
  caption: {
    fontSize: 30,
    fontFamily: "CourierPrime_400Regular_Italic",
    color: "#fff",
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    width: 450,
  },
  buttonContainer: {
    marginTop: 300,
    alignItems: "center",
  },
});

export default Welcome;
