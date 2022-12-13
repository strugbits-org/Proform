import React, { useContext } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon } from "@rneui/themed";
import Btn from "../Button";
import { AuthContext } from "../../context/AuthContext";

const MainMenuModal = ({ navigation }) => {

  const { setUserToken } = useContext(AuthContext);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{ position: "absolute", right: 30, top: 30 }}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Icon name="close" type="font-awesome" color="#000" />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.menu}>
          <Btn
            textColor="#000"
            btnLabel="My Account"
            btnWidth="90%"
            Press={() => {
              navigation.navigate("NewMemberChecklist");
            }}
          />
          <Btn
            textColor="#000"
            btnLabel="Log Out"
            btnWidth="90%"
            Press={() => {
              setUserToken(null)
              navigation.navigate("Dashboard")
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // position: "absolute",
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#ff00ff",
  },
  modalView: {
    height: "100%",
    margin: 0,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 0,
    paddingHorizontal: 40,
    paddingVertical: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menu: {
    marginTop: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainMenuModal;
