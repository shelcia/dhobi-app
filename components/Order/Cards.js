import React, { useState } from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Text, View, Image, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { API_URL } from "../../api";

const Cards = ({ item, handleAmount }) => {
  const [number, setNumber] = useState(0);

  const handleNumber = (name, val, cost) => {
    if (val >= 0) {
      setNumber(val);
      handleAmount(name, val, cost);
    }
  };

  return (
    <React.Fragment>
      <View style={globalStyles.card}>
        <Image
          source={{ uri: `${API_URL}common/category/${item._id}` }}
          style={{ width: 40, height: 40, resizeMode: "contain" }}
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
            onPress={() => handleNumber(item.name, number - 1, item.cost)}
          />
          <Text style={globalStyles.text}>{number}</Text>
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TextInput
              style={globalStyles.text}
              keyboardType={null}
              showSoftInputOnFocus={false}
              onChangeText={(val) => handleNumber(item.name, val, item.cost)}
            >
              {number}
            </TextInput>
          </TouchableWithoutFeedback> */}

          <AntDesign
            name="pluscircle"
            size={24}
            color="#3B90DA"
            style={globalStyles.iconStyle}
            onPress={() => handleNumber(item.name, number + 1, item.cost)}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default Cards;
