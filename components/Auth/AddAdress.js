/* eslint-disable react/prop-types */
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
// import { API_URL } from "../../api";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Loading from "../Partials/Loading";

const AddAdress = ({ navigation }) => {
  const [address, setAddress] = useState("");

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
              // onPress={() => login()}
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

export default AddAdress;
