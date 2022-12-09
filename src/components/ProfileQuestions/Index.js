import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";
import { Buffer } from 'buffer'
import { UpdateUserInfo, UpdateProfilePic } from "../../Api/User";

export default function ProfileQuestions(props) {
  const { subHeading, mainHeading, tagLine, type } = props.item;
  const [image, setImage] = useState();
  const [response, setResponse] = useState({ status: 0, message: "" });
  const [btnDisable, setBtnDisable] = useState(false);
  const [bufferData, setBufferData] = useState();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setResponse((prev) => ({ ...prev, status: 0 }));
    setBtnDisable(() => true);

    if (image) {

      const response = await UpdateProfilePic(bufferData, props.data.memberId);
      if (response.valid) {
        setResponse((prev) => ({ ...prev, status: 1, message: response.msg }));
        setTimeout(() => {
          props.navigation.navigate("NewMemberChecklist")
        }, 1500);
      } else {
        setResponse((prev) => ({ ...prev, status: 2, message: response.error }));
        setBtnDisable(() => false);
      }

    } else {
      if (data.username) {
        props.data.username = data.username;
      } else {
        props.data.fullNames = data.fullNames;
      }

      const response = await UpdateUserInfo(props.data);

      if (response.valid) {
        setResponse((prev) => ({ ...prev, status: 1, message: response.msg }));
        setTimeout(() => {
          props.setCurrentQuestion(props.currentQuestion + 1);
          setResponse((prev) => ({ ...prev, status: 0 }));
          setBtnDisable(() => false);
        }, 1500);
      } else {
        setResponse((prev) => ({ ...prev, status: 2, message: response.error }));
        setBtnDisable(() => false);
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    let buffer = new Buffer.from(result.assets[0].base64, 'base64');

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setBufferData(buffer)
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subHeading}>{subHeading}</Text>
      <Text style={styles.mainHeading}>{mainHeading}</Text>
      <Text style={styles.tagLine}>{tagLine}</Text>
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
            name="fullNames"
          />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[styles.btn, { backgroundColor: btnDisable ? "rgba(0,0,0,0.4)" : "#000" }]}
            disabled={btnDisable}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.fullNames && (
            <Text style={styles.errMsg}>{errors.fullNames.message}</Text>
          )}
          {(response.status === 1) && <Text style={styles.successMsg}>{response.message}</Text>}
          {(response.status === 2) && <Text style={styles.errMsg}>{response.message}</Text>}
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
            name="username"
          />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[styles.btn, { backgroundColor: btnDisable ? "rgba(0,0,0,0.4)" : "#000" }]}
            disabled={btnDisable}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.username && (
            <Text style={styles.errMsg}>{errors.username.message}</Text>
          )}
          {(response.status === 1) && <Text style={styles.successMsg}>{response.message}</Text>}
          {(response.status === 2) && <Text style={styles.errMsg}>{response.message}</Text>}
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
              + Upload Image
            </Text>
          </TouchableOpacity>
          {image && (
            <TouchableOpacity
              onPress={onSubmit}
              style={[styles.btn, { backgroundColor: btnDisable ? "rgba(0,0,0,0.4)" : "#000" }]}
              disabled={btnDisable}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Finish</Text>
            </TouchableOpacity>
          )}
          {(response.status === 1) && <Text style={styles.successMsg}>{response.message}</Text>}
          {(response.status === 2) && <Text style={styles.errMsg}>{response.message}</Text>}
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
    alignItems: "center",
    backgroundColor: "#000",
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
  successMsg: {
    color: "green",
    marginTop: 7,
  },
});
