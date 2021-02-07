import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";

const AddOrder = () => {
  const [items] = useState([
    {
      img:
        "https://cdn.discordapp.com/attachments/795010536365752320/807868598067789874/shirt.png",
      name: "Shirt",
      cost: "3",
      _id: "1",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/795010536365752320/807868598067789874/shirt.png",
      name: "Trousers",
      cost: "3",
      _id: "2",
    },
  ]);
  return (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>New Order</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.img }} />
              {/* <ImageBackground source={item.img} /> */}
              <Text style={globalStyles.entryText}>{item.name}</Text>
              <Text style={globalStyles.entryText}>{item.cost}</Text>
            </View>
          )}
        />
        <View style={globalStyles.buttonContainer}>
          <AppButton title="Schedule Pickup" />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width - 30,
    // borderColor: "red",
    // borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
  },
});

export default AddOrder;
