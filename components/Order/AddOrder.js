import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { API_URL } from "../../api";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import Cards from "./Cards";
import axios from "axios";

const AddOrder = () => {
  const [items, setItems] = useState([
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
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${API_URL}common/category`,
        });
        console.log(response.data);
        if (response.data.status === "200") {
          setItems(response.data.message);
          //   setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <React.Fragment>
      <View style={globalStyles.container}>
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
