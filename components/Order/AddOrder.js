import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.production.min";

const AddOrder = () => {
  const [items] = useState([
    {
      img:
        "https://cdn.discordapp.com/attachments/795010536365752320/807868598067789874/shirt.png",
      name: "Shirt",
      cost: "3",
      _id: "1",
    },
  ]);
  return (
    <React.Fragment>
      <Text>New Order</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </React.Fragment>
  );
};

export default AddOrder;
