import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import Btn from "../Button";
import { useForm, Controller } from "react-hook-form";
import { PostLogin } from "../../Api/Auth";
import { Icon } from "@rneui/themed";
import { AuthContext } from "../../context/AuthContext";

export default function Header(props) {
  const { userToken, drawerOpen, setDrawerOpen } = useContext(AuthContext);

  const navigation = props.navigation;
  return (
    <View style={styles.mainHeader}>
      <View>
        <Icon name="search" type="font-awesome" color="#1387DB" />
      </View>
      <View>
        <Image source={require("../../../assets/images/logoSmall.jpg")} />
      </View>
      <View>
        <TouchableOpacity onPress={() => {
          userToken ? setDrawerOpen(!drawerOpen) : navigation.navigate("Login")
        }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../../assets/images/user.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  heading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 36,
  },
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    width: "100%",
    alignContent: "center",
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  loginInputField: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginTop: 20,
    lineHeight: 2,
    width: "100%",
  },
  errMsg: {
    color: "red",
    marginTop: 7,
  },
  successMsg: {
    color: "green",
    marginTop: 7,
  },
  forgotPasswordBox: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  forgotPassword: {
    color: "#000",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },
  mainHeader: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 5,
  },
});
