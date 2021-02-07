import React, { useState } from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { API_URL } from "../../api";

const Cards = ({ item }) => {
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
          <Text style={globalStyles.listText}> Rs {item.cost} per shirt</Text>
        </View>
        <View style={globalStyles.countCol}>
          <AntDesign
            name="minuscircle"
            size={24}
            color="#3B90DA"
            onPress={() => setNumber(number - 1)}
          />
          <Text style={globalStyles.text}>{number}</Text>
          <AntDesign
            name="pluscircle"
            size={24}
            color="#3B90DA"
            onPress={() => setNumber(number + 1)}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default Cards;
