import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { globalStyles } from "../styles/GlobalStyles";

const FooterDashboard = ({ navigation }) => {
  return (
    <React.Fragment>
      <View style={globalStyles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HelpDesk")}
          style={globalStyles.footersection}
        >
          <View style={globalStyles.footerlinks}>
            <AntDesign name="home" size={26} color="black" />
            <Text style={globalStyles.footertext}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          style={globalStyles.footersection}
        >
          <View style={globalStyles.footerlinks}>
            <FontAwesome5 name="list-alt" size={25} color="black" />
            <Text style={globalStyles.footertextactive}>Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={globalStyles.footersection}
        >
          <View style={globalStyles.footerlinks}>
            <MaterialIcons name="notifications-none" size={24} color="black" />
            <Text style={globalStyles.footertext}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={globalStyles.footersection}
        >
          <View style={globalStyles.footerlinks}>
            <Feather name="user" size={24} color="black" />{" "}
            <Text style={globalStyles.footertext}>Notifications</Text>
          </View>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default FooterDashboard;
