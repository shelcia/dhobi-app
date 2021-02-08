import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import AppButton from "../styles/Button";
import * as firebase from "firebase";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { FIREBASE_CONFIG } from "./Firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OTPVerification = ({ navigation }) => {
  const recaptchaVerifier = useRef(null);
  const verificationCodeTextInput = useRef(null);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [verifyError, setVerifyError] = useState();
  const [verifyInProgress, setVerifyInProgress] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmError, setConfirmError] = useState();
  const [confirmInProgress, setConfirmInProgress] = useState(false);

  const [number, setNumber] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const number = await AsyncStorage.getItem("@iron_number");
        const password = await AsyncStorage.getItem("@iron_password");
        if (number !== null || password !== null) {
          // value previously stored
          setNumber(number);
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const initalise = () => {
      try {
        if (FIREBASE_CONFIG.apiKey) {
          console.log(FIREBASE_CONFIG.apiKey);
          firebase.initializeApp(FIREBASE_CONFIG);
        }
      } catch (err) {
        // ignore app already initialized error on snack
        console.log("Error while authenticating !!");
      }
    };

    initalise();
  }, [FIREBASE_CONFIG]);

  const isConfigValid = !!FIREBASE_CONFIG.apiKey;

  const verification = async () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    try {
      setVerifyError(undefined);
      setVerifyInProgress(true);
      setVerificationId("");
      const verificationId = await phoneProvider.verifyPhoneNumber(
        number,
        recaptchaVerifier.current
      );
      setVerifyInProgress(false);
      setVerificationId(verificationId);
      verificationCodeTextInput.current?.focus();
    } catch (err) {
      setVerifyError(err);
      setVerifyInProgress(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setConfirmError(undefined);
      setConfirmInProgress(true);
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      const authResult = await firebase.auth().signInWithCredential(credential);
      setConfirmInProgress(false);
      setVerificationId("");
      setVerificationCode("");
      verificationCodeTextInput.current?.clear();
      navigation.navigate("Dashboard");
    } catch (err) {
      setConfirmError(err);
      setConfirmInProgress(false);
      Alert.alert("OTP verification failed!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={{ ...globalStyles.title, paddingVertical: 30 }}>
          OTP Verification
        </Text>
        <View>
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={FIREBASE_CONFIG}
          />
          <Text style={globalStyles.labelText}>
            Your phone number
            {"     "} {number}
          </Text>
          <View style={globalStyles.buttonContainer}>
            <AppButton
              title={`${verificationId ? "Resend" : "Send"} Code`}
              disabled={!number}
              onPress={verification}
            />
          </View>
          {verifyError && (
            <Text
              style={globalStyles.warning}
            >{`Error: ${verifyError.message}`}</Text>
          )}
          {verifyInProgress && <ActivityIndicator style={styles.loader} />}
          {verificationId ? (
            <View style={{ alignItems: "center", marginBottom: 15 }}>
              <Text style={globalStyles.success}>
                A verification code has been
              </Text>
              <Text style={globalStyles.success}>sent to your phone</Text>
            </View>
          ) : undefined}
          <Text style={globalStyles.label}>Enter verification code</Text>
          <TextInput
            ref={verificationCodeTextInput}
            style={globalStyles.input}
            editable={!!verificationId}
            placeholder="123456"
            onChangeText={(verificationCode) =>
              setVerificationCode(verificationCode)
            }
          />
          <View style={globalStyles.buttonContainer}>
            <AppButton
              title="Confirm Code"
              disabled={!verificationCode}
              onPress={verifyOTP}
            />
          </View>

          {confirmError && (
            <Text
              style={globalStyles.warning}
            >{`Error: ${confirmError.message}`}</Text>
          )}
          {confirmInProgress && <ActivityIndicator style={styles.loader} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 2,
    fontSize: 29,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 10,
    opacity: 0.35,
    fontWeight: "bold",
  },
  text: {
    marginTop: 10,
    marginBottom: 4,
  },
  error: {
    marginTop: 10,
    fontWeight: "bold",
    color: "red",
  },
  success: {
    marginTop: 10,
    fontWeight: "bold",
    color: "green",
  },
  loader: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFFFFFC0",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontWeight: "bold",
  },
});

export default OTPVerification;
