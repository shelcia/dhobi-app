import React, { useState } from "react";
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
import Loading from "../Partials/Loading";

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState("");

  const login = () => {
    setIsLoading(true);
    console.log({ phone, password });
    const headers = {
      "Content-Type": "application/json",
    };

    const response = {
      phone: phone,
      password: password,
    };

    const body = JSON.stringify(response);
    const url = `${API_URL}auth/signin`;

    axios
      .post(url, body, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "200") {
          AsyncStorage.setItem("@phone", phone);
          AsyncStorage.setItem("@userid", response.data.message.id);
          AsyncStorage.setItem("@name", response.data.message.name);
          AsyncStorage.setItem("@token", response.data.message.token);
          setIsLoading(false);
          SetError("");
          navigation.navigate("Dashboard");
        } else if (response.data.status === "400") {
          setIsLoading(false);
          SetError(response.data.message);
        }
      })
      .catch((error) => {
        console.log("Error", `${API_URL}auth/signin`, body, error);
      });
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Login</Text>
            <View>
              <Text style={globalStyles.label}>Mobile Number</Text>
              <TextInput
                keyboardType="number-pad"
                style={globalStyles.input}
                placeholder="Enter your ten digit number"
                onChangeText={(val) => setPhone(val)}
              />
              <Text style={globalStyles.label}>Password</Text>
              <TextInput
                keyboardType="visible-password"
                style={globalStyles.input}
                secureTextEntry={true}
                placeholder="Enter your password"
                onChangeText={(val) => setPassword(val)}
              />
            </View>
            <Text style={globalStyles.warning}>{error}</Text>
            <View style={{ marginTop: 60 }}>
              <AppButton
                title="Login"
                size="sm"
                backgroundColor="#398E3D"
                onPress={() => login()}
              />
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={globalStyles.authLink}>
                Don’t have an account then Signup ?
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </React.Fragment>
  );
};

export default Login;
