/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import AppButton from "../styles/Button";
import { API_URL } from "../../api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Loading from "../Partials/Loading";

const AddAddress = ({ navigation }) => {
  const [address, setAddress] = useState("");

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
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
  }, []);

  const signup = () => {
    // setIsLoading(true);
    const headers = {
      "Content-Type": "application/json",
    };

    const response = {
      name: name,
      phone: number,
      password: password,
    };

    const body = JSON.stringify(response);
    const url = `${API_URL}auth/register`;

    axios
      .post(url, body, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "200") {
          AsyncStorage.setItem("@phone", number);
          AsyncStorage.setItem("@name", response.data.message.name);
          AsyncStorage.setItem("@token", response.data.message.token);
          // setIsLoading(false);
          // SetError("");
          navigation.navigate("AddAddress");
        } else if (response.data.status === "400") {
          // setIsLoading(false);
          // SetError(response.data.message);
        }
      })
      .catch((error) => {
        console.log("Error", `${API_URL}auth/register`, body, error);
      });
  };

  console.log(address, navigation);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Login</Text>
          <View>
            <Text style={globalStyles.label}>Mobile Number</Text>
            <TextInput
              keyboardType="number-pad"
              style={globalStyles.input}
              placeholder="Enter your ten digit number"
              onChangeText={(val) => setAddress(val)}
            />
          </View>
          {/* <Text style={globalStyles.warning}>{error}</Text> */}
          <View style={{ marginTop: 60 }}>
            <AppButton
              title="Login"
              size="sm"
              backgroundColor="#398E3D"
              onPress={() => signup()}
            />
          </View>

          {/* <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={globalStyles.authLink}>
              Don’t have an account then Signup ?
            </Text>
          </TouchableWithoutFeedback> */}
        </View>
      </TouchableWithoutFeedback>
    </React.Fragment>
  );
};

export default AddAddress;
