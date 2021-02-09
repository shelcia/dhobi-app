/* eslint-disable react/prop-types */
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { API_URL } from "../../api";
import { AmountContext } from "../Context/AmountContext";
import { OrderContext } from "../Context/OrderContext";
import { PickupContext } from "../Context/PickupContext";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";

const OrderDetails = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useContext(AmountContext);
  const [order, setOrder] = useContext(OrderContext);
  const [pickup, setPickup] = useContext(PickupContext);
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

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

  console.log([order]);

  useEffect(() => {
    const getData = async () => {
      try {
        const add = await AsyncStorage.getItem("@iron_address");
        const name = await AsyncStorage.getItem("@iron_name");
        const phone = await AsyncStorage.getItem("@iron_number");
        // const phone = await AsyncStorage.getItem("@iron_number");
        setName(name);
        setPhone(phone);
        setAddress(add);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    const fetchCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${API_URL}common/category`,
        });
        if (response.data.status === "200") {
          const names = response.data.message.map((cat) => cat.name);
          console.log(names);
          setItems(names);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (items.length === 0) {
      fetchCategories();
    }
    return () => ac.abort();
  }, []);

  const placeOrder = () => {
    const response = {
      name: name,
      phone: phone,
      orderDetails: order,
      address: address,
      status: "Request under validation",
      pickup: pickup,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    // const body = JSON.stringify(response);
    const url = `${API_URL}common/orders`;
    console.log(response);

    axios
      .post(url, response, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "200") {
          navigation.navigate("SuccesfullyPlaced");
          setAmount(0);
          setOrder({});
          setPickup("");
        } else {
          setError(response.data.message);
        }
      })
      .catch(() => setError("Server Error"));
  };

  return (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={{ ...globalStyles.title, paddingTop: 30 }}>
          Order Details
        </Text>
        <View style={globalStyles.table}>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Name</Text>
            <Text style={globalStyles.entryText}>{name}</Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Number</Text>
            <Text style={globalStyles.entryText}>{phone}</Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Address</Text>
            <Text style={globalStyles.entryText}>{address}</Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Order</Text>
            <Text style={globalStyles.entryText}>
              {items.map(
                (item) =>
                  order[item] && (
                    <Text key={item}>
                      {item} x {order[item]},{" "}
                    </Text>
                  )
              )}
            </Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Pickup Date</Text>
            <Text style={globalStyles.entryText}>
              {pickup ? convertDate(pickup) : ""}
            </Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Estimated AMount</Text>
            <Text style={globalStyles.entryText}>{amount}</Text>
          </View>
        </View>
        <Text style={globalStyles.warning}>{error}</Text>
        <View style={globalStyles.buttonContainer}>
          <AppButton title="Confirm Order" onPress={placeOrder} />
        </View>
      </View>
    </React.Fragment>
  );
};

export default OrderDetails;
