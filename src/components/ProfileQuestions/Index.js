import { Button } from "@rneui/base";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Btn from "../Button";

export default function ProfileQuestions(props) {
  const { subHeading, mainHeading, tagLine, type } = props.item;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subHeading}>{subHeading}</Text>
      <Text style={styles.mainHeading}>{mainHeading}</Text>
      <Text style={styles.tagLine}>{tagLine}</Text>
      {/* {if(type === "default"){
            <TextInput style={styles.inputField} placeholder="Type Here" />
        }} */}
      {type === "default" && (
        <TextInput style={styles.inputField} placeholder="Type Here" />
      )}
      {type === "upload" && <Text>File Picker Here</Text>}
      {/* <TextInput style={styles.inputField} placeholder="Type Here" /> */}
      <TouchableOpacity
        onPress={() => {
          props.setCurrentQuestion(props.currentQuestion + 1);
        }}
        style={styles.btn}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
    height: "100%",
  },
  btn: {
    color: "#fff",
    backgroundColor: "#000",
    alignItems: "center",
    width: "80%",
    paddingVertical: 12,
    marginVertical: 10,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#a854fd",
  },
  inputField: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    width: "80%",
    marginVertical: 20,
  },
  subHeading: {
    color: "#000",
    fontWeight: "500",
    fontSize: 24,
  },
  tagLine: {
    fontSize: 14,
    marginVertical: 15,
  },
  mainHeading: {
    color: "#000",
    fontWeight: "500",
    fontSize: 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 7,
  },
});
