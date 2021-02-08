import React, { useState } from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Text, View, Image, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { API_URL } from "../../api";

const Cards = ({ item, handleAmount }) => {
  const [number, setNumber] = useState(0);
  return (
    <React.Fragment>
      <View style={globalStyles.card}>
        <Image
          source={{ uri: `${API_URL}common/category/${item._id}` }}
          style={{ width: 40, height: 40 }}
        />
        <View style={globalStyles.nameCol}>
          <Text style={globalStyles.text}>{item.name}</Text>
          <Text style={globalStyles.listText}>
            Rs {item.cost} per {item.name}
          </Text>
        </View>
        <View style={globalStyles.countCol}>
          <AntDesign
            name="minuscircle"
            size={24}
            color="#3B90DA"
            style={globalStyles.iconStyle}
            onPress={() => setNumber(number - 1)}
          />
          <TextInput
            style={globalStyles.text}
            keyboardType="numbers-and-punctuation"
            onChangeText={(val) => handleAmount(item.name, val, item.cost)}
          >
            {number}
          </TextInput>
          <AntDesign
            name="pluscircle"
            size={24}
            color="#3B90DA"
            style={globalStyles.iconStyle}
            onPress={() => setNumber(number + 1)}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default Cards;
