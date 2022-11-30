import Btn from "../Button/Index";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function index(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: "#000", fontWeight: "bold", fontSize: 36 }}>
        Create New Password
      </Text>
      <View style={styles.subHeading}>
        <Text>Please enter your email address</Text>
      </View>

      <TextInput
        placeholder="Account Email"
        keyboardType={"email-address"}
        style={styles.inputField}
      />

      <Btn
        textColor="white"
        bgColor="#000"
        btnLabel="Create Password   "
        Press={() => props.navigation.navigate("ConfirmationBox")}
      />
      {/* onPress={() => props.navigation.navigate("Login")} */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginTop: 30,
    lineHeight: 2,
    width: "100%",
  },
  subHeading: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 5,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
  },
});
