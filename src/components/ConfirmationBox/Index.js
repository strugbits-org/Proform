import Btn from "../Button/Index";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function index(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Please Check Your Email</Text>
      <View style={styles.subHeading}>
        <Text
          style={{
            fontSize: 14,
            alignContent: "center",
          }}
        >
          We sent a link to set your new password by email.
        </Text>
      </View>

      <Btn
        textColor="white"
        bgColor="#000"
        marginTop="40"
        btnLabel="Got It"
        Press={() => props.navigation.navigate("Login")}
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
    marginTop: 30,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  mainHeading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 42,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
