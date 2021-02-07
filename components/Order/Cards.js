import React, { useState } from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Cards = ({ item }) => {
  const [number, setNumber] = useState(0);
  console.log(number);
  return (
    <React.Fragment>
      <View style={globalStyles.card}>
        <Image source={{ uri: item.img }} style={{ width: 40, height: 40 }} />
        <View style={globalStyles.nameCol}>
          <Text style={globalStyles.entryText}>{item.name}</Text>
          <Text style={globalStyles.entryText}>{item.cost}</Text>
        </View>
        <View style={globalStyles.countCol}>
          <AntDesign
            name="minuscircle"
            size={24}
            color="#3B90DA"
            onPress={() => setNumber(number - 1)}
          />
          <Text>{number}</Text>
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
