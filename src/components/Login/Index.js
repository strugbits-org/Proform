import Btn from "../Button/Index";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";

export default function index(props) {
  return (
    <View style={styles.mainContainer}>
      <Image source={require("../../../assets/images/logoSmall.jpg")} />
      <Text style={{ color: "#000", fontWeight: "bold", fontSize: 36 }}>
        Log In
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          width: "100%",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Text style={{ fontSize: 16 }}>New member ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
          <Text style={{ color: "#3d9be9", fontWeight: "bold", fontSize: 16 }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Account Email"
        keyboardType={"email-address"}
        style={styles.loginInputField}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.loginInputField}
      />

      <View
        style={{
          alignItems: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ForgotPassword")}
        >
          <Text style={{ color: "#000", fontSize: 14 }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <Btn
        textColor="white"
        bgColor="#000"
        btnLabel="Login"
        Press={() => alert("Logged In")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginInputField: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginTop: 30,
    lineHeight: 2,
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
  },
});
