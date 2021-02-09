/* eslint-disable react/prop-types */
import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

const MiniLoader = ({ content }) => {
  return (
    <React.Fragment>
      <View style={{ ...globalStyles.container, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#65ABEA" />
        <Text style={{ ...globalStyles.text, marginTop: 30 }}>{content}</Text>
      </View>
    </React.Fragment>
  );
};

export default MiniLoader;
