import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";

// eslint-disable-next-line react/prop-types
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={globalStyles.button}>
    <Text style={globalStyles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
