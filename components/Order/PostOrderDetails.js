/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { API_URL } from "../../api";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";

const PostOrderDetails = ({ navigation, route }) => {
  const [items, setItems] = useState([]);

  const { name, phone, address, orderDetails, pickup, status } = route.params;

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
                  orderDetails[item] && (
                    <Text key={item}>
                      {item} x {orderDetails[item]},{" "}
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
            <Text style={globalStyles.entries}>Status</Text>
            <Text style={globalStyles.entryText}>{status}</Text>
          </View>
        </View>
        <View style={globalStyles.buttonContainer}>
          <AppButton
            title="Go Back"
            onPress={() => navigation.navigate("Order")}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default PostOrderDetails;
