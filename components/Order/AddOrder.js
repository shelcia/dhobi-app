/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { API_URL } from "../../api";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import Cards from "./Cards";
import axios from "axios";
import Loading from "../Partials/Loading";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { AmountContext } from "../Context/AmountContext";

const AddOrder = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useContext(OrderContext);
  const [amount, setAmount] = useContext(AmountContext);

  const handleAmount = (name, quantity, cost, flag) => {
    console.log("clicked");
    const newOrder = {
      ...order,
      [name]: quantity,
    };
    setOrder(newOrder);

    let newAmount = 0;
    if (flag) {
      newAmount = amount - parseInt(cost);
    } else {
      newAmount = amount + parseInt(cost);
    }
    setAmount(newAmount);
  };
  useEffect(() => {
    const ac = new AbortController();
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await axios({
          method: "get",
          url: `${API_URL}common/category`,
        });
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
          renderItem={({ item }) => (
            <Cards item={item} handleAmount={handleAmount} />
          )}
        />
        <View style={globalStyles.buttonContainer}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <Text style={styles.text}>Estimated Cost {"  "}</Text>
            <Text style={styles.amount}>
              {"  "}
              {amount}
            </Text>
          </View>
          <AppButton
            title="Schedule Pickup"
            onPress={() => navigation.navigate("EstimatedCost")}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#333333",
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  amount: {
    color: "#3B90DA",
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",
    flexShrink: 1,
    flexWrap: "wrap",
  },
});

export default AddOrder;
