/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("");
  const [check, setCheck] = useState(false);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@iron_name", name);
      await AsyncStorage.setItem("@iron_number", uname);
      await AsyncStorage.setItem("@iron_password", password);
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inner}>
          <Text style={styles.title}>Signup</Text>
          <ScrollView>
            <Text style={globalStyles.label}>Name</Text>
            <TextInput
              style={globalStyles.input}
              keyboardType="default"
              placeholder="Enter your name"
              onChangeText={(val) => setName(val)}
            />
            <Text style={globalStyles.label}>Mobile Number</Text>
            <TextInput
              style={globalStyles.input}
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              placeholder="Number (+91 99999 99999) with code"
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
              <Text style={globalStyles.warning}>
                Passwords don`&#39;`t match
              </Text>
            )}
          </ScrollView>

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
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={globalStyles.authLink}>
              Have an account already then Login ?
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    // justifyContent: "space-around",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 25,
    color: "#3B90DA",
    alignSelf: "flex-start",
    marginVertical: 10,
    marginBottom: 20,
  },
});

export default Signup;
