import React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import AppButton from "../styles/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({ navigation }) => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("");
  const [check, setCheck] = useState(false);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@number", uname);
      await AsyncStorage.setItem("@password", password);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  useEffect(() => {
    const checkPwd = () => {
      if (rpassword !== "") {
        if (password === rpassword) {
          setCheck(true);
        } else {
          setCheck(false);
        }
      } else {
        setCheck(true);
      }
    };
    checkPwd();
  }, [password, rpassword]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Signup</Text>
        <View>
          <Text style={globalStyles.label}>Mobile Number</Text>
          <TextInput
            style={globalStyles.input}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            placeholder="Enter your number (+91 99999 99999)"
            onChangeText={(val) => setUname(val)}
          />
          <Text style={globalStyles.label}>Password</Text>
          <TextInput
            keyboardType="visible-password"
            style={globalStyles.input}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={(val) => setPassword(val)}
          />
          <Text style={globalStyles.label}>Repeat Password</Text>
          <TextInput
            keyboardType="visible-password"
            style={globalStyles.input}
            secureTextEntry={true}
            placeholder="Repeat Password"
            onChangeText={(val) => setRPassword(val)}
          />

          {!check && (
            <Text style={globalStyles.warning}>Passwords don't match</Text>
          )}
        </View>
        <View style={{ marginTop: 30 }}>
          <AppButton
            title="Signup"
            size="sm"
            backgroundColor="#398E3D"
            onPress={() => {
              storeData();
              navigation.navigate("OTP");
            }}
          />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <Text style={globalStyles.authLink}>
            Have an account already then Login ?
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
