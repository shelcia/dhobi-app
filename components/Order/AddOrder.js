import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { API_URL } from "../../api";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import Cards from "./Cards";
import axios from "axios";
import Loading from "../Partials/Loading";

const AddOrder = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const ac = new AbortController();
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await axios({
          method: "get",
          url: `${API_URL}common/category`,
        });
        console.log(response.data);
        if (response.data.status === "200") {
          setItems(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    if (items.length === 0) {
      fetchCategories();
    }
    return () => ac.abort();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <View style={globalStyles.container}>
        <FlatList
          data={items}
          style={{ paddingHorizontal: 10, paddingTop: 10 }}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Cards item={item} />}
        />
        <View style={globalStyles.buttonContainer}>
          <Text>Estimted Cost</Text>
          <AppButton title="Schedule Pickup" />
        </View>
      </View>
    </React.Fragment>
  );
};

export default AddOrder;
