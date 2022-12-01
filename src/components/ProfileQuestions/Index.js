import { Button } from "@rneui/base";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Btn from "../Button/Index";

export default function ProfileQuestions(props) {
  console.log("====================================");
  console.log("Props: ", props);
  console.log("====================================");
  const { subHeading, mainHeading, tagLine, type } = props.item;
  return (
    <View style={styles.mainContainer}>
      <Text>{subHeading}</Text>
      <Text>{mainHeading}</Text>
      <Text>{tagLine}</Text>
      <TextInput
        style={styles.inputField}
        onChange={(e) => {
          console.log("====================================");
          console.log("e: ", e.target);
          console.log("====================================");
        }}
      />
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
});
