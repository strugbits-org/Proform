import { Button } from "@rneui/base";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
  Alert,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import Btn from "../Button";

export default function ProfileQuestions(props) {
  const { subHeading, mainHeading, tagLine, type } = props.item;
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subHeading}>{subHeading}</Text>
      <Text style={styles.mainHeading}>{mainHeading}</Text>
      <Text style={styles.tagLine}>{tagLine}</Text>
      {/* {if(type === "default"){
            <TextInput style={styles.inputField} placeholder="Type Here" />
        }} */}
      {type === "default" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextInput style={styles.inputField} placeholder="Type Here" />
          <TouchableOpacity
            onPress={() => {
              props.setCurrentQuestion(props.currentQuestion + 1);
            }}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "upload" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                marginVertical: 10,
                borderRadius: 500,
              }}
            />
          )}
          <TouchableOpacity onPress={pickImage} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              {" "}
              + Upload Image{" "}
            </Text>
          </TouchableOpacity>
          {image && (
            <TouchableOpacity
              onPress={() => {
                props.setCurrentQuestion(props.currentQuestion + 1);
              }}
              style={styles.btn}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
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
  btnLast: {
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
