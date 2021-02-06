import React from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Dimensions, Text, View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    // other styles for the item container
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1,
    // other styles for the inner container
  },
});

const HomePage = () => {
  return (
    <View style={globalStyles.container}>
      <Carousel
        renderItem={Item}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
      {/* <Text style={globalStyles.headTitle}>HomePage</Text> */}
    </View>
  );
};

const Item = () => {
  return (
    <View style={styles.slide}>
      <View style={styles.slideInnerContainer} />
    </View>
  );
};

export default HomePage;
