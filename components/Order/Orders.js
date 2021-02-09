/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { API_URL } from "../../api";
import MiniLoader from "../Partials/MiniLoader";
import { globalStyles } from "../styles/GlobalStyles";
import FooterOrder from "./FooterOrder";
import { FontAwesome5 } from "@expo/vector-icons";

const Order = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

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

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchOrders();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    fetchOrders();
    return () => ac.abort();
  }, []);

  const convertDate = (date) => {
    const dates = new Date(date);
    const formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
    }).format(dates);
    return formattedDate;
  };

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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={orders}
            style={{ padding: 10 }}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("PostOrderDetails", item)}
                navigation={navigation}
              >
                <View style={globalStyles.listGroup}>
                  <View style={globalStyles.col1}>
                    <View style={globalStyles.rowTable}>
                      <Text style={{ ...globalStyles.entries, width: 90 }}>
                        Pickup
                      </Text>
                      <Text style={globalStyles.entryText}>
                        {item.pickup ? convertDate(item.pickup) : ""}
                      </Text>
                    </View>
                    <View style={globalStyles.rowTable}>
                      <Text style={{ ...globalStyles.entries, width: 90 }}>
                        Status
                      </Text>
                      <Text style={globalStyles.entryText}>{item.status}</Text>
                    </View>
                  </View>
                  <View style={globalStyles.col2}>
                    <FontAwesome5
                      name="chevron-right"
                      size={24}
                      color="white"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      <FooterOrder navigation={navigation} />
    </React.Fragment>
  );
};

export default Order;
