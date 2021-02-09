/* eslint-disable react/prop-types */
import React from "react";
import { Text, View, Dimensions, FlatList } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";
import AppButton from "../styles/Button";

const Areas = ({ navigation, route }) => {
  // console.log("route", route.params);
  const area = route.params;

  return (
    <React.Fragment>
      <View
        style={{
          ...globalStyles.container,
          paddingTop: 30,
        }}
      >
        <Text style={globalStyles.title}>Areas Available</Text>
        <View
          style={{
            justifyContent: "flex-start",
            width: Dimensions.get("window").width,
          }}
        >
          <FlatList
            data={area}
            style={{ padding: 10, paddingLeft: 30 }}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    ...globalStyles.text,
                    paddingVertical: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <AntDesign name="star" size={10} color="#3B90DA" /> {item}
                </Text>
              </View>
            )}
          />
        </View>
        <View
          style={{
            ...globalStyles.buttonContainer,
            paddingTop: 20,
            paddingBottom: 0,
          }}
        >
          <AppButton
            title="Go Back"
            size="sm"
            backgroundColor="#398E3D"
            onPress={() => navigation.navigate("HomePage")}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default Areas;
