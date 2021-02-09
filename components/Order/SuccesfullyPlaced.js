/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppButton from "../styles/Button";
import { FontAwesome } from "@expo/vector-icons";

const SuccesfullyPlaced = ({ navigation }) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <FontAwesome name="check-circle" size={300} color="white" />
        <Text style={{ ...styles.heading, textAlign: "center" }}>
          Succesfully Placed !!
        </Text>
        <View style={styles.buttonContainer}>
          <AppButton
            title="My Orders"
            size="sm"
            backgroundColor="#398E3D"
            onPress={() => navigation.navigate("Order")}
          />
        </View>
      </View>
    </React.Fragment>
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

export default SuccesfullyPlaced;
