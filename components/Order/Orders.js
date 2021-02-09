import React from "react";
// import { useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

const Order = () => {
  return (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Order</Text>
      </View>
    </React.Fragment>
  );
};

export default Order;
