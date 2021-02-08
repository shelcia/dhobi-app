import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FooterDashboard from "../Dashboard/FooterDashbaord";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EstimatedCost = ({ navigation }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getAmount = async () => {
      const amt = await AsyncStorage.getItem("@iron-amount");
      setAmount(amt);
    };
    getAmount();
  }, []);

  return (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={styles.header}>Estimated Cost</Text>
        <Text style={styles.amount}>Rs {amount}</Text>
        <Image
          source={require("../../assets/images/receipt.png")}
          style={{
            resizeMode: "cover",
            height: 279,
            width: 310,
          }}
        />
        <Text style={{ ...styles.header, marginBottom: 20 }}>
          To Continue Shopping
        </Text>

        <View style={{ ...globalStyles.buttonContainer, marginVertical: 0 }}>
          <AppButton title="Signup" />
          <Text
            style={{
              fontSize: 15,
              fontFamily: "JosefinSans_500Medium",
              marginBottom: 10,
            }}
          >
            OR
          </Text>
          <AppButton title="Login " />
        </View>
      </View>
      <FooterDashboard navigation={navigation} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "#333333",
    fontSize: 23,
    fontFamily: "JosefinSans_500Medium",
    flexShrink: 1,
    flexWrap: "wrap",
    marginTop: 20,
  },
  amount: {
    color: "#3B90DA",
    fontSize: 30,
    fontFamily: "JosefinSans_700Bold",
    flexShrink: 1,
    flexWrap: "wrap",
    marginVertical: 20,
  },
});

export default EstimatedCost;
