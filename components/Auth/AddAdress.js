/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import AppButton from "../styles/Button";
import { API_URL } from "../../api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
// import Loading from "../Partials/Loading";

const AddAddress = ({ navigation }) => {
  const [door, setDoor] = useState("");
  const [street, setStreet] = useState("");
  const [locality, setLocality] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");

  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    const ac = new AbortController();

    const getData = async () => {
      try {
        const name = await AsyncStorage.getItem("@iron_name");
        const number = await AsyncStorage.getItem("@iron_number");
        const password = await AsyncStorage.getItem("@iron_password");
        if (number !== null || password !== null) {
          // value previously stored
          setNumber(number);
          setName(name);
          setPassword(password);
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
    return () => ac.abort();
  }, []);

  const signup = () => {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = {
      name: name,
      phone: number,
      password: password,
      type: "customer",
      address: `${door}, ${street}, ${locality}, ${area}, ${pincode}`,
    };

    const body = JSON.stringify(response);
    const url = `${API_URL}auth/register`;

    axios
      .post(url, body, {
        headers: headers,
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data.status === "200") {
          AsyncStorage.setItem("@iron_phone", number);
          AsyncStorage.setItem("@iron_name", response.data.message.name);
          AsyncStorage.setItem("@iron_token", response.data.message.token);
          AsyncStorage.setItem(
            "@iron_address",
            `${door}, ${street}, ${locality}, ${area}, ${pincode}`
          );
          // setIsLoading(false);
          navigation.navigate("AddPickup");
          setError("");
        } else if (response.data.status === "400") {
          // setIsLoading(false);
          setError(response.data.message);
        }
      })
      .catch((error) => {
        console.log("Error", `${API_URL}auth/register`, body, error);
      });
  };

  // console.log(address, navigation);
  return (
    <React.Fragment>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.inner}>
            <ScrollView>
              <Text style={styles.title}>Add Address</Text>
              <Text style={globalStyles.label}>Door no/ House no</Text>
              <TextInput
                keyboardType="default"
                style={globalStyles.input}
                placeholder="Enter doorno or street no"
                onChangeText={(val) => setDoor(val)}
                numberOfLines={5}
              />
              <Text style={globalStyles.label}>Street/ Apartment</Text>
              <TextInput
                keyboardType="default"
                style={globalStyles.input}
                placeholder="Enter street or apartment name"
                onChangeText={(val) => setStreet(val)}
                numberOfLines={5}
              />
              <Text style={globalStyles.label}>Locality/Area</Text>
              <TextInput
                keyboardType="default"
                style={globalStyles.input}
                placeholder="Enter your area"
                onChangeText={(val) => setLocality(val)}
              />
              <Text style={globalStyles.label}>City/Town</Text>
              <TextInput
                keyboardType="default"
                style={globalStyles.input}
                placeholder="Enter your city/town"
                onChangeText={(val) => setArea(val)}
              />
              <Text style={globalStyles.label}>Pincode</Text>
              <TextInput
                keyboardType="default"
                style={globalStyles.input}
                placeholder="Enter your pincode"
                onChangeText={(val) => setPincode(val)}
              />
              <Text style={globalStyles.warning}>{error}</Text>
            </ScrollView>
            <View style={{ marginTop: 20, alignSelf: "center" }}>
              <AppButton
                title="Complete"
                size="sm"
                backgroundColor="#398E3D"
                onPress={() => signup()}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inner: {
    paddingTop: 20,
    paddingBottom: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 25,
    color: "#3B90DA",
    alignSelf: "flex-start",
    marginVertical: 25,
    marginBottom: 20,
  },
});

export default AddAddress;
