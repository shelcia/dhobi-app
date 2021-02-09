/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FooterDashboard from "../Dashboard/FooterDashbaord";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { AmountContext } from "../Context/AmountContext";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { TextInput } from "react-native-gesture-handler";

const EstimatedCost = ({ navigation }) => {
  const [amount] = useContext(AmountContext);
  const [authReq, setAuthReq] = useState(true);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const getPhone = async () => {
      const phone = await AsyncStorage.getItem("@iron_phone");
      const add = await AsyncStorage.getItem("@iron_address");
      if (phone) {
        setAuthReq(false);
        setAddress(add);
      } else {
        setAuthReq(true);
      }
    };
    getPhone();
  }, []);

  return (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={styles.header}>Estimated Cost</Text>
        <Text style={styles.amount}>Rs {amount}</Text>

        {authReq ? (
          <React.Fragment>
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

            <View
              style={{ ...globalStyles.buttonContainer, marginVertical: 0 }}
            >
              <AppButton
                title="Signup"
                onPress={() => navigation.navigate("Signup")}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "JosefinSans_500Medium",
                  marginBottom: 10,
                }}
              >
                OR
              </Text>
              <AppButton title="Login" />
            </View>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Text style={globalStyles.title}>Address</Text>
            <Text
              style={{
                ...globalStyles.text,
                marginHorizontal: 24,
                fontSize: 16,
                marginTop: 20,
                marginBottom: 30,
              }}
            >
              {address}
            </Text>
            <TouchableOpacity style={{ marginBottom: 50 }}>
              <Text style={globalStyles.authLink}>Edit Address</Text>
            </TouchableOpacity>
            <AppButton
              title="Confirm Address"
              onPress={() => navigation.navigate("AddPickup")}
            />
          </React.Fragment>
        )}
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
