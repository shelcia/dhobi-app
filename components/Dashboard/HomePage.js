// import React from "react";
// import { Dimensions, Text, View, StyleSheet } from "react-native";
// import Carousel from "react-native-snap-carousel";
// const horizontalMargin = 20;
// const slideWidth = 280;

// const sliderWidth = Dimensions.get("window").width;
// const itemWidth = slideWidth + horizontalMargin * 2;
// const itemHeight = 200;

// const styles = StyleSheet.create({
//   slide: {
//     width: itemWidth,
//     height: itemHeight,
//     paddingHorizontal: horizontalMargin,
//     // other styles for the item container
//   },
//   slideInnerContainer: {
//     width: slideWidth,
//     flex: 1,
//     // other styles for the inner container
//   },
// });

// const HomePage = () => {
//   return (
//     <View style={globalStyles.container}>
//       <Carousel
//         renderItem={Item}
//         sliderWidth={sliderWidth}
//         itemWidth={itemWidth}
//       />
//       {/* <Text style={globalStyles.headTitle}>HomePage</Text> */}
//     </View>
//   );
// };

// const Item = () => {
//   return (
//     <View style={styles.slide}>
//       <View style={styles.slideInnerContainer} />
//     </View>
//   );
// };

// export default HomePage;

// // import { AntDesign } from '@expo/vector-icons';
// // <AntDesign name="home" size={24} color="black" />
// // import { FontAwesome5 } from '@expo/vector-icons';
// // <FontAwesome5 name="list-alt" size={24} color="black" />
// // import { MaterialIcons } from '@expo/vector-icons';
// // <MaterialIcons name="notifications-none" size={24} color="black" />
// // import { Feather } from '@expo/vector-icons';
// // <Feather name="user" size={24} color="black" />

import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";
import FooterDashboard from "./FooterDashbaord";

// eslint-disable-next-line react/prop-types
const HomePage = ({ navigation }) => {
  const [area] = useState(
    "Anbu nagar, Ram nagar, TVS nagar, Thiagaya raja nagar, Maharaja nagar, Thendral nagar, Podhigai nagar, Jamal nagar(soon more…)"
  );

  return (
    <React.Fragment>
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          alignItems: "center",
          paddingVertical: 80,
        }}
      >
        <View
          style={{
            backgroundColor: "#65ABEA",
            flex: 0.3,
            width: Dimensions.get("window").width - 40,
            alignItems: "center",
            borderColor: "red",
            borderWidth: "2px",
            borderRadius: "20px",
            marginTop: 10,
          }}
        >
          <Text style={globalStyles.title}>All Offers</Text>
        </View>
        <Text style={globalStyles.title}>Services Provided</Text>
        <TouchableOpacity>
          <Text style={globalStyles.entryText}>Services Provided</Text>
        </TouchableOpacity>
        <Text style={globalStyles.title}>Areas Available</Text>
        <Text style={globalStyles.entryText}>{area}</Text>
        <View style={globalStyles.buttonContainer}>
          <AppButton
            title="Place Order"
            size="sm"
            backgroundColor="#398E3D"
            // eslint-disable-next-line react/prop-types
            onPress={() => navigation.navigate("Welcome")}
          />
        </View>
      </View>
      {/* <FooterDashboard navigation={navigation} /> */}
    </React.Fragment>
  );
};

export default HomePage;
