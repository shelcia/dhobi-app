import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { OrderContext } from "../Context/OrderContext";
import { PickupContext } from "../Context/PickupContext";
import { globalStyles } from "../styles/GlobalStyles";

const OrderDetails = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order] = useContext(OrderContext);
  const [pickup] = useContext(PickupContext);

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

  useEffect(() => {
    const getData = async () => {
      try {
        const add = await AsyncStorage.getItem("@iron-address");
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

  return (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Order Details</Text>
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
            <Text style={globalStyles.entryText}>shirt x {order.shirt}</Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Pickup Date</Text>
            <Text style={globalStyles.entryText}>
              {pickup ? convertDate(pickup) : ""}
            </Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default OrderDetails;
