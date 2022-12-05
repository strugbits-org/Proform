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
import DropDownPicker from "react-native-dropdown-picker";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "expo-datepicker";
import Btn from "../Button";

export default function AccountSetupQuestio(props) {
  const { subHeading, mainHeading, tagLine, flowText, type } = props.item;
  const [image, setImage] = useState(null);
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);
  const [activityLevelOpen, setActivityLevelOpen] = useState(false);
  const [activityLevelValue, setActivityLevelValue] = useState(null);
  const [activityLevel, setActivityLevel] = useState([
    { label: "Sedentary", value: "sedentary" },
    { label: "Light", value: "light" },
    { label: "Moderate", value: "moderate" },
    { label: "Very Active", value: "veryActive" },
  ]);
  const [weightGoalOpen, setWeightGoalOpen] = useState(false);
  const [weightGoalValue, setWeightGoalValue] = useState(null);
  const [weightGoal, setWeightGoal] = useState([
    { label: "Fat Loss", value: "fatLoss" },
    { label: "Maintain", value: "maintain" },
    { label: "Gain", value: "gain" },
  ]);
  const [timeZoneOpen, setTimeZoneOpen] = useState(false);
  const [timeZoneValue, setTimeZoneValue] = useState(null);
  const [timeZone, setTimeZone] = useState([
    { label: "Fat Loss", value: "fatLoss" },
    { label: "Maintain", value: "maintain" },
    { label: "Gain", value: "gain" },
  ]);

  const [date, setDate] = useState(new Date().toString());

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
      {subHeading && <Text style={styles.subHeading}>{subHeading}</Text>}
      {mainHeading && <Text style={styles.mainHeading}>{mainHeading}</Text>}
      {tagLine && <Text style={styles.tagLine}>{tagLine}</Text>}
      {flowText && <Text style={styles.flowText}>{flowText}</Text>}

      {/* {if(type === "default"){
            <TextInput style={styles.inputField} placeholder="Type Here" />
        }} */}
      {type === "beginBtn" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.setCurrentQuestion(props.currentQuestion + 1);
            }}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Begin</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "startProfile" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/images/user.png")}
          />
          <TouchableOpacity
            onPress={() => {
              props.setCurrentQuestion(props.currentQuestion + 1);
            }}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Build Profile</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "gender" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={genderOpen}
              value={genderValue} //genderValue
              items={gender}
              setOpen={setGenderOpen}
              setValue={setGenderValue}
              setItems={setGender}
              placeholder="Select from dropdownn"
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
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
      {type === "dob" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <DatePicker date={date} onChange={(date) => setDate(date)} />
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
      {type === "activityLevel" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={activityLevelOpen}
              value={activityLevelValue} //genderValue
              items={activityLevel}
              setOpen={setActivityLevelOpen}
              setValue={setActivityLevelValue}
              setItems={setActivityLevel}
              placeholder="Select from dropdownn"
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
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
      {type === "weightGoals" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={weightGoalOpen}
              value={weightGoalValue} //genderValue
              items={weightGoal}
              setOpen={setWeightGoalOpen}
              setValue={setWeightGoalValue}
              setItems={setWeightGoal}
              placeholder="Select from dropdownn"
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
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
      {type === "timeZone" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={weightGoalOpen}
              value={weightGoalValue} //genderValue
              items={weightGoal}
              setOpen={setWeightGoalOpen}
              setValue={setWeightGoalValue}
              setItems={setWeightGoal}
              placeholder="Select from dropdownn"
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
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
      {type === "customize" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/images/customize-icon.png")}
          />
          <Text style={styles.tagLine}>
            Now, let's set up some customization tools to create a complete
            experience
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.setCurrentQuestion(props.currentQuestion + 1);
            }}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Customization Tool
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
    alignItems: "center",
    textalign: "center",
  },
  flowText: {
    fontSize: 12,
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
  dropdownGender: {
    marginHorizontal: 10,
    width: "80%",
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
});
