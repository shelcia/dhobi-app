/* eslint-disable react/prop-types */
import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { globalStyles } from "../styles/GlobalStyles";

const FooterOrder = ({ navigation }) => {
  return (
    <React.Fragment>
      <View style={globalStyles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={globalStyles.footersection}
        >
          <View style={globalStyles.footerlinks}>
            <AntDesign name="home" size={25} color="#A5A5A5" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Order")}
          style={globalStyles.footersection}
        >
          <View style={globalStyles.footerlinks}>
            <FontAwesome5 name="list-alt" size={25} color="#65ABEA" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={globalStyles.footersection}
        >
          <View style={globalStyles.footerlinks}>
            <MaterialIcons
              name="notifications-none"
              size={24}
              color="#A5A5A5"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={globalStyles.footersection}
        >
          <View style={globalStyles.footerlinks}>
            <Feather name="user" size={24} color="#A5A5A5" />
          </View>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default FooterOrder;
