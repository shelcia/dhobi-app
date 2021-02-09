/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { API_URL } from "../../api";
import MiniLoader from "../Partials/MiniLoader";
import { globalStyles } from "../styles/GlobalStyles";
import FooterOrder from "./FooterOrder";

const Order = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const phone = await AsyncStorage.getItem("@iron_number");
        if (!phone) {
          setOrders([]);
          return;
        }
        const response = await axios({
          method: "get",
          url: `${API_URL}common/orders/${phone}`,
        });
        console.log(response.data);
        if (response.data.status === "200") {
          setOrders(response.data.message);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchOrders();
    return () => ac.abort();
  }, []);

  return isLoading ? (
    <MiniLoader content="Fetching Your Orders" />
  ) : (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={{ ...globalStyles.title, paddingVertical: 30 }}>
          Orders
        </Text>
        {orders.length === 0 ? (
          <React.Fragment>
            <Image
              source={require("../../assets/images/empty.png")}
              style={{ width: 345, height: 270, resizeMode: "contain" }}
            />
            <Text style={globalStyles.boldText}>No Orders :(</Text>
          </React.Fragment>
        ) : (
          <FlatList
            data={orders}
            style={{ padding: 10, paddingLeft: 30 }}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View>
                <Text>{item.address}</Text>
              </View>
            )}
          />
        )}
      </View>
      <FooterOrder navigation={navigation} />
    </React.Fragment>
  );
};

export default Order;
