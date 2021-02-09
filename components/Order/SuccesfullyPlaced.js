import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

const SuccesfullyPlaced = () => {
  return (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>SuccesFully Placed</Text>
      </View>
    </React.Fragment>
  );
};

export default SuccesfullyPlaced;
