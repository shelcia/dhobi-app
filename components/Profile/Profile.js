/* eslint-disable react/prop-types */
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { API_URL } from "../../api";
import MiniLoader from "../Partials/MiniLoader";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import FooterProfile from "./FooterProfile";

const Profile = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const phone = await AsyncStorage.getItem("@iron_number");
        if (!phone) {
          setUser([]);
          return;
        }
        const response = await axios({
          method: "get",
          url: `${API_URL}common/orders/${phone}`,
        });
        console.log(response.data);
        if (response.data.status === "200") {
          setUser(response.data.message[0]);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchUsers();
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
    <MiniLoader content="Fetching User Details" />
  ) : (
    <React.Fragment>
      <View style={globalStyles.container}>
        <Text style={{ ...globalStyles.title, paddingVertical: 30 }}>
          Profile
        </Text>
        <View style={globalStyles.table}>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Name</Text>
            <Text style={globalStyles.entryText}>{user.name}</Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Mobile</Text>
            <Text style={globalStyles.entryText}>{user.phone}</Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Address</Text>
            <Text style={globalStyles.entryText}>{user.address}</Text>
          </View>
          <View style={globalStyles.rowTable}>
            <Text style={globalStyles.entries}>Member Since</Text>
            <Text style={globalStyles.entryText}>
              {user.date !== "" ? convertDate(user.date) : ""}
            </Text>
          </View>
        </View>
        <View style={globalStyles.buttonContainer}>
          <AppButton title="Edit Profile" />
        </View>
      </View>
      <FooterProfile navigation={navigation} />
    </React.Fragment>
  );
};

export default Profile;
