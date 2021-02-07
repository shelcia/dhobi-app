import React, { useState } from "react";
import { View, FlatList } from "react-native";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import Cards from "./Cards";

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
        {/* <Text style={globalStyles.title}>New Order</Text> */}
        <FlatList
          data={items}
          style={{ paddingHorizontal: 10, paddingTop: 10 }}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Cards item={item} />}
        />
        <View style={globalStyles.buttonContainer}>
          <AppButton title="Schedule Pickup" />
        </View>
      </View>
    </React.Fragment>
  );
};

export default AddOrder;
