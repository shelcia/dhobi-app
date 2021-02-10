/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
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
      const phone = await AsyncStorage.getItem("@iron_number");

      if (!phone) {
        setUser({
          name: "",
          phone: "",
          address: "",
          date: "",
        });
        return;
      }
      setIsLoading(true);
      try {
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
        {user.name === "" ? (
          <React.Fragment>
            <Image
              source={require("../../assets/images/noprofolie.png")}
              style={{ width: 345, height: 270, resizeMode: "contain" }}
            />
            <Text style={{ ...globalStyles.boldText, paddingHorizontal: 5 }}>
              No profile available :(
            </Text>
            <Text
              style={{
                ...globalStyles.authLink,
                paddingHorizontal: 30,
                alignSelf: "center",
                marginTop: 25,
              }}
            >
              Have an account already then Login to see your profile
            </Text>
          </React.Fragment>
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </View>
      <FooterProfile navigation={navigation} />
    </React.Fragment>
  );
};

export default Profile;
