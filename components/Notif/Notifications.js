import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

const Notification = () => {
  return (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={{ ...globalStyles.title, marginVertical: 30 }}>
          Notifications
        </Text>
      </View>
    </React.Fragment>
  );
};

export default Notification;
