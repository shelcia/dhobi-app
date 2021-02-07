import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, FlatList, Image } from "react-native";
import { API_URL } from "../../api";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import FooterDashboard from "./FooterDashbaord";
import axios from "axios";
import Loading from "../Partials/Loading";

const HomePage = ({ navigation }) => {
  const [area, setArea] = useState(
    "Anbu nagar, Ram nagar, TVS nagar, Thiagaya raja nagar, Maharaja nagar, Thendral nagar, Podhigai nagar, Jamal nagar(soon more…)"
  );
  const [services, setServices] = useState([]);
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      try {
        const [
          firstResponse,
          secondResponse,
          thirdResponse,
        ] = await Promise.all([
          axios.get(`${API_URL}common/about`),
          axios.get(`${API_URL}common/services`),
          axios.get(`${API_URL}common/banners`),
        ]);
        console.log(firstResponse.data);
        if (
          firstResponse.data.status === "200" &&
          secondResponse.data.status === "200" &&
          thirdResponse.data.status === "200"
        ) {
          setArea(firstResponse.data.message[0].areas);
          setServices(secondResponse.data.message);
          setBanners(thirdResponse.data.message);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchAll();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          alignItems: "center",
          paddingVertical: 10,
          backgroundColor: "#fff",
        }}
      >
        <FlatList
          data={banners}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View>
              <Image
                source={{ uri: `${API_URL}common/banners/${item._id}` }}
                style={{
                  width: Dimensions.get("window").width - 40,
                  height: 175,
                }}
              />
            </View>
          )}
        />
        <Text style={globalStyles.title}>Services Provided</Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingBottom: 60,
          }}
        >
          <FlatList
            data={services}
            style={{ paddingHorizontal: 10 }}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View
                style={{
                  elevation: 4,
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  width: 100,
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 10,
                  flex: 1,
                  padding: 10,
                  borderRadius: 10,
                  // flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={{ uri: `${API_URL}common/services/${item._id}` }}
                  style={{ width: 60, height: 60 }}
                />
                <Text style={globalStyles.text}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        <Text style={globalStyles.title}>Areas Available</Text>
        <Text style={globalStyles.text}>{area} (soon more…)</Text>
        <View style={globalStyles.buttonContainer}>
          <AppButton
            title="Place Order"
            size="sm"
            backgroundColor="#398E3D"
            onPress={() => navigation.navigate("AddOrder")}
          />
        </View>
      </View>
      <FooterDashboard navigation={navigation} />
    </React.Fragment>
  );
};

export default HomePage;

// const token = await AsyncStorage.getItem("@token");
// const number = await AsyncStorage.getItem("@phone");  useEffect(() => {
//   const fetchServices = async () => {
//     try {
//       const response = await axios({
//         method: "get",
//         url: `${API_URL}common/services`,
//         // headers: { "auth-token": `${token}` },
//       });
//       console.log(response.data);
//       if (response.data.status === "200") {
//         setArea(response.data.message[0].areas);
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchServices();
// }, []);
