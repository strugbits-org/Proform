import React, { useState } from "react";
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

const MainMenuModal = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [likeIcon, setLikeIcon] = useState("heart-o");
  const [like, setLike] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ position: "absolute", right: 20, top: 20 }}>
              <Icon
                name="close"
                type="font-awesome"
                color="#000"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>

            <Btn
              textColor="#000"
              btnLabel="My Account"
              btnWidth="90%"
              Press={() => {
                console.log("Navigate");
                setModalVisible(!modalVisible);
                navigation.navigate("NewMemberChecklist");
              }}
            />
            <Btn
              textColor="#000"
              btnLabel="Log Out"
              btnWidth="90%"
              Press={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          if (like) {
            // setLikeIcon("heart-o");
            setLike(false);
          } else {
            setLike(true);
            // setLikeIcon("heart");
            setModalVisible(true);
          }
        }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../../assets/images/user.png")}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    right: 0,
    width: "75%",
    height: "100%",
    backgroundColor: "#ff00ff",
  },
  modalView: {
    height: "100%",
    margin: 0,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 0,
    paddingHorizontal: 20,
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
  gifImage: {
    width: 112,
    height: 84,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MainMenuModal;
