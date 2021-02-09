/* eslint-disable no-unused-vars */
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

  const [areas, setAreas] = useState("");
  const [area, setArea] = useState("");

  const [error, setError] = useState("");
  console.log(areas);
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

  useEffect(() => {
    const ac = new AbortController();

    const getArea = async () => {
      try {
        const response = await axios.get(`${API_URL}common/about`);
        if (response.data.status === "200")
          setAreas(response.data.message[0].areas.split(", "));
      } catch (error) {
        console.log(error);
      }
    };
    getArea();
    return () => ac.abort();
  }, []);

  const signup = () => {
    // setIsLoading(true);
    const filteredtResults = areas.filter(
      (areas) => areas.toLowerCase().indexOf(area.toLowerCase()) === 0
    );
    console.log({ filteredtResults });

    if (filteredtResults.length === 0) {
      console.log("no match");
    } else {
      console.log("match");
    }

    const headers = {
      "Content-Type": "application/json",
    };

    const response = {
      name: name,
      phone: number,
      password: password,
      type: "customer",
      address: address,
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
          // setIsLoading(false);
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
          <Text style={{ ...globalStyles.title, paddingVertical: 20 }}>
            Add Address
          </Text>
          <View>
            <Text style={globalStyles.label}>Complete Address</Text>
            <TextInput
              keyboardType="default"
              style={globalStyles.input}
              placeholder="Enter complete address"
              onChangeText={(val) => setAddress(val)}
              numberOfLines={5}
            />
            <Text style={globalStyles.label}>Area</Text>
            <TextInput
              keyboardType="default"
              style={globalStyles.input}
              placeholder="Enter your area"
              onChangeText={(val) => setArea(val)}
            />
          </View>
          <Text style={globalStyles.warning}>{error}</Text>
          <View style={{ marginTop: 60 }}>
            <AppButton
              title="Complete"
              size="sm"
              backgroundColor="#398E3D"
              onPress={() => signup()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </React.Fragment>
  );
};

export default AddAddress;
