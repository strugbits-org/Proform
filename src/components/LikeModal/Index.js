import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Icon } from "@rneui/themed";
import Btn from "../Button";

const LikeModal = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [likeIcon, setLikeIcon] = useState("heart-o");
  const [like, setLike] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={false}
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
            <Image
              style={styles.gifImage}
              source={require("../../../assets/images/weightLifting.gif")}
            />
            <Text style={styles.modalText}>
              Sign up for FREE to start following, tracking and completing
              workouts today!
            </Text>

            <Btn
              textColor="white"
              bgColor="#1387DB"
              btnLabel="Create Account"
              btnWidth="90%"
              Press={() => navigation.navigate("SignUp")}
            />
            <Btn
              bgColor="#BFBFBF"
              textColor="#fff"
              btnLabel="Keep Scrolling"
              btnWidth="90%"
              Press={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          if (like) {
            setLikeIcon("heart-o");
            setLike(false);
          } else {
            setLike(true);
            setLikeIcon("heart");
            setModalVisible(true);
          }
        }}
      >
        <Text style={styles.textStyle}>
          <Icon name={likeIcon} type="font-awesome" color="#f50" />
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "95%",
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

export default LikeModal;
