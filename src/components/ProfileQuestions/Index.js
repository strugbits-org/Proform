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
import { useForm, Controller } from "react-hook-form";
import { UpdateUserInfo } from "../../Api/User";

export default function ProfileQuestions(props) {
  const { subHeading, mainHeading, tagLine, type } = props.item;
  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Data0: ", data);
    console.log(
      "Inside onSubmit ",
      props.currentQuestion + 1,
      props.questions.length
    );

    if (props.currentQuestion + 1 === props.questions.length) {
      props.navigation.navigate("NewMemberChecklist");
    } else {
      props.setCurrentQuestion(props.currentQuestion + 1);
    }
    // setResponse((prev) => ({ ...prev, status: 0 }));
    // setBtnDisable(() => true);
    // let response = await PostLogin(data);

    // if (response.valid) {
    //   setResponse((prev) => ({ ...prev, status: 1, message: response.msg }));
    //   setTimeout(() => {
    //     props.navigation.navigate("NewMemberChecklist")
    //   }, 1500);
    // } else {
    //   setResponse((prev) => ({ ...prev, status: 2, message: response.error }));
    //   setBtnDisable(() => false);
    // }
  };

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
      {type === "fullName" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "Full Name is required" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                style={styles.inputField}
                placeholder="Type Here"
              />
            )}
            name="fullNameInput"
          />

          <TouchableOpacity
            // onPress={() => {
            //   props.setCurrentQuestion(props.currentQuestion + 1);
            // }}
            onPress={handleSubmit(onSubmit)}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.fullNameInput && (
            <Text style={styles.errMsg}>{errors.fullNameInput.message}</Text>
          )}
        </View>
      )}
      {type === "userName" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "Username is required" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                style={styles.inputField}
                placeholder="Type Here"
              />
            )}
            name="userName"
          />

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.userName && (
            <Text style={styles.errMsg}>{errors.userName.message}</Text>
          )}
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
              // onPress={() => {
              //   // props.setCurrentQuestion(props.currentQuestion + 1);
              //   props.navigation.navigate("NewMemberChecklist");
              // }}
              onPress={onSubmit}
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
  errMsg: {
    color: "red",
    marginTop: 7,
  },
});
