import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AppButton from "../styles/Button";
import { globalStyles } from "../styles/GlobalStyles";

const AddPickup = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickup, setPickup] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setPickup(date);
    console.log(date);
    hideDatePicker();
  };

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
        <View style={{ marginTop: 30 }}>
          <Image
            // eslint-disable-next-line no-undef
            source={require("../../assets/images/time.png")}
            style={{
              resizeMode: "contain",
              height: 279,
              width: 310,
            }}
          />
          <AppButton title="Pick up a date" onPress={showDatePicker} />
          <Text style={globalStyles.title}>You Picked</Text>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={globalStyles.text}>
              {pickup ? convertDate(pickup) : ""}
            </Text>
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View
          style={{
            ...globalStyles.buttonContainer,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginTop: 100,
          }}
        >
          {pickup !== "" && <AppButton title="Confirm Pickup time" />}
        </View>
      </View>
    </React.Fragment>
  );
};

export default AddPickup;
