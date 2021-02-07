import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import FooterDashboard from "./FooterDashbaord";

const HomePage = ({ navigation }) => {
  const [area] = useState(
    "Anbu nagar, Ram nagar, TVS nagar, Thiagaya raja nagar, Maharaja nagar, Thendral nagar, Podhigai nagar, Jamal nagar(soon more…)"
  );

  return (
    <React.Fragment>
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          alignItems: "center",
          paddingVertical: 80,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            backgroundColor: "#65ABEA",
            flex: 0.3,
            width: Dimensions.get("window").width - 40,
            alignItems: "center",
            borderColor: "red",
            borderWidth: "2px",
            borderRadius: "20px",
            marginTop: 10,
          }}
        >
          <Text style={globalStyles.title}>All Offers</Text>
        </View>
        <Text style={globalStyles.title}>Services Provided</Text>
        <TouchableOpacity>
          <Text style={globalStyles.entryText}>Services Provided</Text>
        </TouchableOpacity>
        <Text style={globalStyles.title}>Areas Available</Text>
        <Text style={globalStyles.entryText}>{area}</Text>
        <View style={globalStyles.buttonContainer}>
          <AppButton
            title="Place Order"
            size="sm"
            backgroundColor="#398E3D"
            onPress={() => navigation.navigate("AddOrder")}
          />
        </View>
      </View>
      <FooterDashboard navigation={navigation} />
    </React.Fragment>
  );
};

export default HomePage;
