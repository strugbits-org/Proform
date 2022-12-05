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
import Checkbox from "expo-checkbox";
import Btn from "../Button";

export default function AccountSetupQuestio(props) {
  const { subHeading, mainHeading, tagLine, flowText, type, upto } = props.item;
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
    { label: "Europe/Andorra", value: "Europe/Andorra" },
    { label: "Asia/Dubai", value: "Asia/Dubai" },
    { label: "Asia/Kabul", value: "Asia/Kabul" },
    { label: "Europe/Tirane", value: "Europe/Tirane" },
    { label: "Asia/Yerevan", value: "Antarctica/Casey" },
    { label: "Antarctica/Davis", value: "Antarctica/Davis" },
    { label: "Antarctica/DumontDUrville", value: "Antarctica/DumontDUrville" },
    { label: "Antarctica/Mawson", value: "Antarctica/Mawson" },
    { label: "Antarctica/Palmer", value: "Antarctica/Casey" },
  ]);

  const [weeklyResetOpen, setWeeklyResetOpen] = useState(false);
  const [weeklyResetValue, setWeeklyResetValue] = useState(null);
  const [weeklyReset, setWeeklyReset] = useState([
    { label: "Sunday", value: "sunday" },
    { label: "Monday", value: "monday" },
  ]);

  const [conversionTypeOpen, setConversionTypeOpen] = useState(false);
  const [conversionTypeValue, setConversionTypeValue] = useState(null);
  const [conversionType, setConversionType] = useState([
    { label: "lb", value: "lb" },
    { label: "kg", value: "kg" },
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

  const [isChecked, setChecked] = useState({
    Su: false,
    Mo: false,
    Tu: false,
    We: false,
    Th: false,
    Fr: false,
    Sa: false,
  });
  const onChangeHandler = (name, value) => {
    setChecked((prev) => ({ ...prev, [name]: value }));
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
              open={timeZoneOpen}
              value={timeZoneValue} //genderValue
              items={timeZone}
              setOpen={setTimeZoneOpen}
              setValue={setTimeZoneValue}
              setItems={setTimeZone}
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
      {type === "weeklyReset" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={weeklyResetOpen}
              value={weeklyResetValue} //genderValue
              items={weeklyReset}
              setOpen={setWeeklyResetOpen}
              setValue={setWeeklyResetValue}
              setItems={setWeeklyReset}
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
      {type === "conversionType" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={conversionTypeOpen}
              value={conversionTypeValue} //genderValue
              items={conversionType}
              setOpen={setConversionTypeOpen}
              setValue={setConversionTypeValue}
              setItems={setConversionType}
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
      {type === "autoAdjust" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.agreeCheckBox}>
            <View style={styles.sectionCheckBox}>
              <Checkbox style={styles.checkboxCheckBox} />
              <Text style={styles.paragraphCheckBox}>
                I agree to the site terms & conditions
              </Text>
            </View>
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
      {type === "mesurable" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/images/measurement.webp")}
          />
          <Text style={styles.tagLine}>
            Next, let's add your measurables to customize your daily workouts
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.setCurrentQuestion(props.currentQuestion + 1);
            }}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Add Mesurables</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "currentWeight" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.numberBox}>
            <View>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={styles.numInputField}
              />
            </View>
            <View>
              <Text style={{ fontSize: 80, marginHorizontal: 10 }}>lb</Text>
            </View>
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
      {type === "goalWeight" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.numberBox}>
            <View>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={styles.numInputField}
              />
            </View>
            <View>
              <Text style={{ fontSize: 80, marginHorizontal: 10 }}>lb</Text>
            </View>
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
      {type === "bodyFat" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.numberBox}>
            <View>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={styles.numInputField}
              />
            </View>
            <View>
              <Text style={{ fontSize: 80, marginHorizontal: 10 }}>%</Text>
            </View>
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
      {type === "calorieGoal" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View>
            <View>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={styles.numInputField}
              />
            </View>
            <View>
              <Text>Calories (per Week)</Text>
            </View>
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
      {type === "height" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.numberBox}>
            <View style={styles.heightBox}>
              <View>
                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  style={styles.numInputField}
                />
              </View>
              <View>
                <Text style={{ fontSize: 80, marginHorizontal: 10 }}>ft</Text>
              </View>
            </View>
            <View style={styles.heightBox}>
              <View>
                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  style={styles.numInputField}
                />
              </View>
              <View>
                <Text style={{ fontSize: 80, marginHorizontal: 10 }}>in</Text>
              </View>
            </View>
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
          <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
            <Text style={{ color: "#000", fontSize: 16 }}>
              {" "}
              Upload Image +{" "}
            </Text>
          </TouchableOpacity>
          {image && (
            <TouchableOpacity
              onPress={() => {
                props.setCurrentQuestion(props.currentQuestion + 1);
              }}
              style={styles.btn}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {type === "buildItenary" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/images/itinerary.webp")}
          />
          <Text style={styles.tagLine}>Now, let's build your itinerary:</Text>
          <TouchableOpacity
            onPress={() => {
              props.setCurrentQuestion(props.currentQuestion + 1);
            }}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Build Itinerary</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "trainingDays" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.containerCheckBox}>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Su}
                onValueChange={(checked) => onChangeHandler("Su", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Su</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Mo}
                onValueChange={(checked) => onChangeHandler("Mo", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Mo</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Tu}
                onValueChange={(checked) => onChangeHandler("Tu", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Tu</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.We}
                onValueChange={(checked) => onChangeHandler("We", checked)}
              />
              <Text style={styles.paragraphCheckBox}>We</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Th}
                onValueChange={(checked) => onChangeHandler("Th", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Th</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Fr}
                onValueChange={(checked) => onChangeHandler("Fr", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Fr</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Sa}
                onValueChange={(checked) => onChangeHandler("Sa", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Sa</Text>
            </View>
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
      {type === "setWeights" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/images/weight-icon.webp")}
          />
          <Text style={styles.tagLine}>
            Now, let's set your weights so we can start building your training
            program:
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.setCurrentQuestion(props.currentQuestion + 1);
            }}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Set Weights</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "findWeights" && (
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
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Set Your Weights
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "benchPress" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View>
            <Image
              style={{ width: 100, height: 100, marginTop: 30 }}
              source={require("../../../assets/images/benchPress.gif")}
            />
            <View>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={styles.numInputField}
              />
            </View>
            <View>
              <Text>in Pounds (lbs)</Text>
            </View>
          </View>
          <Text
            style={{
              color: "#d1d1d1",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            Unsure? Take your best guess. These weights will automatically
            adjust for you
          </Text>
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
      {type === "backSquats" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View>
            <Image
              style={{ width: 100, height: 100, marginTop: 30 }}
              source={require("../../../assets/images/backSquats.gif")}
            />
            <View>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={styles.numInputField}
              />
            </View>
            <View>
              <Text>in Pounds (lbs)</Text>
            </View>
          </View>
          <Text
            style={{
              color: "#d1d1d1",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            Unsure? Take your best guess. These weights will automatically
            adjust for you
          </Text>
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
      {type === "powerClean" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View>
            <Image
              style={{ width: 100, height: 100, marginTop: 30 }}
              source={require("../../../assets/images/powerClean.gif")}
            />
            <View>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={styles.numInputField}
              />
            </View>
            <View>
              <Text>in Pounds (lbs)</Text>
            </View>
          </View>
          <Text
            style={{
              color: "#d1d1d1",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            Unsure? Take your best guess. These weights will automatically
            adjust for you
          </Text>
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
      {type === "deadLift" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <View>
            <Image
              style={{ width: 100, height: 100, marginTop: 30 }}
              source={require("../../../assets/images/deadLift.gif")}
            />
            <View>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={styles.numInputField}
              />
            </View>
            <View>
              <Text>in Pounds (lbs)</Text>
            </View>
          </View>
          <Text
            style={{
              color: "#d1d1d1",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            Unsure? Take your best guess. These weights will automatically
            adjust for you
          </Text>
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
    textAlignVertical: "center",
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
  uploadBtn: {
    alignItems: "center",
    width: "80%",
    paddingVertical: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  inputField: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    width: "80%",
    marginVertical: 20,
  },
  numInputField: {
    borderBottomWidth: 0,
    fontSize: 80,
    marginHorizontal: 10,
    textAlign: "center",
  },
  numberBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  heightBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  subHeading: {
    color: "#000",
    fontWeight: "500",
    fontSize: 24,
    textAlign: "center",
  },
  tagLine: {
    fontSize: 14,
    marginVertical: 15,
    textAlign: "center",
    textAlignVertical: "center",
  },
  flowText: {
    fontSize: 12,
    marginVertical: 15,
    textAlign: "center",
  },
  mainHeading: {
    color: "#000",
    fontWeight: "500",
    fontSize: 36,
    textAlign: "center",
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
  containerCheckBox: {
    flexDirection: "row",
    marginTop: 20,
  },
  agreeCheckBox: {
    marginTop: 20,
    width: "100%",
  },
  sectionCheckBox: {
    // flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  paragraphCheckBox: {
    fontSize: 14,
  },
  checkboxCheckBox: {
    marginVertical: 8,
  },
});

// [
//     'Europe/Andorra',
//     'Asia/Dubai',
//     'Asia/Kabul',
//     'Europe/Tirane',
//     'Asia/Yerevan',
//     'Antarctica/Casey',
//     'Antarctica/Davis',
//     'Antarctica/DumontDUrville',
//     'Antarctica/Mawson',
//     'Antarctica/Palmer',
//     'Antarctica/Rothera',
//     'Antarctica/Syowa',
//     'Antarctica/Troll',
//     'Antarctica/Vostok',
//     'America/Argentina/Buenos_Aires',
//     'America/Argentina/Cordoba',
//     'America/Argentina/Salta',
//     'America/Argentina/Jujuy',
//     'America/Argentina/Tucuman',
//     'America/Argentina/Catamarca',
//     'America/Argentina/La_Rioja',
//     'America/Argentina/San_Juan',
//     'America/Argentina/Mendoza',
//     'America/Argentina/San_Luis',
//     'America/Argentina/Rio_Gallegos',
//     'America/Argentina/Ushuaia',
//     'Pacific/Pago_Pago',
//     'Europe/Vienna',
//     'Australia/Lord_Howe',
//     'Antarctica/Macquarie',
//     'Australia/Hobart',
//     'Australia/Currie',
//     'Australia/Melbourne',
//     'Australia/Sydney',
//     'Australia/Broken_Hill',
//     'Australia/Brisbane',
//     'Australia/Lindeman',
//     'Australia/Adelaide',
//     'Australia/Darwin',
//     'Australia/Perth',
//     'Australia/Eucla',
//     'Asia/Baku',
//     'America/Barbados',
//     'Asia/Dhaka',
//     'Europe/Brussels',
//     'Europe/Sofia',
//     'Atlantic/Bermuda',
//     'Asia/Brunei',
//     'America/La_Paz',
//     'America/Noronha',
//     'America/Belem',
//     'America/Fortaleza',
//     'America/Recife',
//     'America/Araguaina',
//     'America/Maceio',
//     'America/Bahia',
//     'America/Sao_Paulo',
//     'America/Campo_Grande',
//     'America/Cuiaba',
//     'America/Santarem',
//     'America/Porto_Velho',
//     'America/Boa_Vista',
//     'America/Manaus',
//     'America/Eirunepe',
//     'America/Rio_Branco',
//     'America/Nassau',
//     'Asia/Thimphu',
//     'Europe/Minsk',
//     'America/Belize',
//     'America/St_Johns',
//     'America/Halifax',
//     'America/Glace_Bay',
//     'America/Moncton',
//     'America/Goose_Bay',
//     'America/Blanc-Sablon',
//     'America/Toronto',
//     'America/Nipigon',
//     'America/Thunder_Bay',
//     'America/Iqaluit',
//     'America/Pangnirtung',
//     'America/Atikokan',
//     'America/Winnipeg',
//     'America/Rainy_River',
//     'America/Resolute',
//     'America/Rankin_Inlet',
//     'America/Regina',
//     'America/Swift_Current',
//     'America/Edmonton',
//     'America/Cambridge_Bay',
//     'America/Yellowknife',
//     'America/Inuvik',
//     'America/Creston',
//     'America/Dawson_Creek',
//     'America/Fort_Nelson',
//     'America/Vancouver',
//     'America/Whitehorse',
//     'America/Dawson',
//     'Indian/Cocos',
//     'Europe/Zurich',
//     'Africa/Abidjan',
//     'Pacific/Rarotonga',
//     'America/Santiago',
//     'America/Punta_Arenas',
//     'Pacific/Easter',
//     'Asia/Shanghai',
//     'Asia/Urumqi',
//     'America/Bogota',
//     'America/Costa_Rica',
//     'America/Havana',
//     'Atlantic/Cape_Verde',
//     'America/Curacao',
//     'Indian/Christmas',
//     'Asia/Nicosia',
//     'Asia/Famagusta',
//     'Europe/Prague',
//     'Europe/Berlin',
//     'Europe/Copenhagen',
//     'America/Santo_Domingo',
//     'Africa/Algiers',
//     'America/Guayaquil',
//     'Pacific/Galapagos',
//     'Europe/Tallinn',
//     'Africa/Cairo',
//     'Africa/El_Aaiun',
//     'Europe/Madrid',
//     'Africa/Ceuta',
//     'Atlantic/Canary',
//     'Europe/Helsinki',
//     'Pacific/Fiji',
//     'Atlantic/Stanley',
//     'Pacific/Chuuk',
//     'Pacific/Pohnpei',
//     'Pacific/Kosrae',
//     'Atlantic/Faroe',
//     'Europe/Paris',
//     'Europe/London',
//     'Asia/Tbilisi',
//     'America/Cayenne',
//     'Africa/Accra',
//     'Europe/Gibraltar',
//     'America/Godthab',
//     'America/Danmarkshavn',
//     'America/Scoresbysund',
//     'America/Thule',
//     'Europe/Athens',
//     'Atlantic/South_Georgia',
//     'America/Guatemala',
//     'Pacific/Guam',
//     'Africa/Bissau',
//     'America/Guyana',
//     'Asia/Hong_Kong',
//     'America/Tegucigalpa',
//     'America/Port-au-Prince',
//     'Europe/Budapest',
//     'Asia/Jakarta',
//     'Asia/Pontianak',
//     'Asia/Makassar',
//     'Asia/Jayapura',
//     'Europe/Dublin',
//     'Asia/Jerusalem',
//     'Asia/Kolkata',
//     'Indian/Chagos',
//     'Asia/Baghdad',
//     'Asia/Tehran',
//     'Atlantic/Reykjavik',
//     'Europe/Rome',
//     'America/Jamaica',
//     'Asia/Amman',
//     'Asia/Tokyo',
//     'Africa/Nairobi',
//     'Asia/Bishkek',
//     'Pacific/Tarawa',
//     'Pacific/Enderbury',
//     'Pacific/Kiritimati',
//     'Asia/Pyongyang',
//     'Asia/Seoul',
//     'Asia/Almaty',
//     'Asia/Qyzylorda',
//     'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
//     'Asia/Aqtobe',
//     'Asia/Aqtau',
//     'Asia/Atyrau',
//     'Asia/Oral',
//     'Asia/Beirut',
//     'Asia/Colombo',
//     'Africa/Monrovia',
//     'Europe/Vilnius',
//     'Europe/Luxembourg',
//     'Europe/Riga',
//     'Africa/Tripoli',
//     'Africa/Casablanca',
//     'Europe/Monaco',
//     'Europe/Chisinau',
//     'Pacific/Majuro',
//     'Pacific/Kwajalein',
//     'Asia/Yangon',
//     'Asia/Ulaanbaatar',
//     'Asia/Hovd',
//     'Asia/Choibalsan',
//     'Asia/Macau',
//     'America/Martinique',
//     'Europe/Malta',
//     'Indian/Mauritius',
//     'Indian/Maldives',
//     'America/Mexico_City',
//     'America/Cancun',
//     'America/Merida',
//     'America/Monterrey',
//     'America/Matamoros',
//     'America/Mazatlan',
//     'America/Chihuahua',
//     'America/Ojinaga',
//     'America/Hermosillo',
//     'America/Tijuana',
//     'America/Bahia_Banderas',
//     'Asia/Kuala_Lumpur',
//     'Asia/Kuching',
//     'Africa/Maputo',
//     'Africa/Windhoek',
//     'Pacific/Noumea',
//     'Pacific/Norfolk',
//     'Africa/Lagos',
//     'America/Managua',
//     'Europe/Amsterdam',
//     'Europe/Oslo',
//     'Asia/Kathmandu',
//     'Pacific/Nauru',
//     'Pacific/Niue',
//     'Pacific/Auckland',
//     'Pacific/Chatham',
//     'America/Panama',
//     'America/Lima',
//     'Pacific/Tahiti',
//     'Pacific/Marquesas',
//     'Pacific/Gambier',
//     'Pacific/Port_Moresby',
//     'Pacific/Bougainville',
//     'Asia/Manila',
//     'Asia/Karachi',
//     'Europe/Warsaw',
//     'America/Miquelon',
//     'Pacific/Pitcairn',
//     'America/Puerto_Rico',
//     'Asia/Gaza',
//     'Asia/Hebron',
//     'Europe/Lisbon',
//     'Atlantic/Madeira',
//     'Atlantic/Azores',
//     'Pacific/Palau',
//     'America/Asuncion',
//     'Asia/Qatar',
//     'Indian/Reunion',
//     'Europe/Bucharest',
//     'Europe/Belgrade',
//     'Europe/Kaliningrad',
//     'Europe/Moscow',
//     'Europe/Simferopol',
//     'Europe/Kirov',
//     'Europe/Astrakhan',
//     'Europe/Volgograd',
//     'Europe/Saratov',
//     'Europe/Ulyanovsk',
//     'Europe/Samara',
//     'Asia/Yekaterinburg',
//     'Asia/Omsk',
//     'Asia/Novosibirsk',
//     'Asia/Barnaul',
//     'Asia/Tomsk',
//     'Asia/Novokuznetsk',
//     'Asia/Krasnoyarsk',
//     'Asia/Irkutsk',
//     'Asia/Chita',
//     'Asia/Yakutsk',
//     'Asia/Khandyga',
//     'Asia/Vladivostok',
//     'Asia/Ust-Nera',
//     'Asia/Magadan',
//     'Asia/Sakhalin',
//     'Asia/Srednekolymsk',
//     'Asia/Kamchatka',
//     'Asia/Anadyr',
//     'Asia/Riyadh',
//     'Pacific/Guadalcanal',
//     'Indian/Mahe',
//     'Africa/Khartoum',
//     'Europe/Stockholm',
//     'Asia/Singapore',
//     'America/Paramaribo',
//     'Africa/Juba',
//     'Africa/Sao_Tome',
//     'America/El_Salvador',
//     'Asia/Damascus',
//     'America/Grand_Turk',
//     'Africa/Ndjamena',
//     'Indian/Kerguelen',
//     'Asia/Bangkok',
//     'Asia/Dushanbe',
//     'Pacific/Fakaofo',
//     'Asia/Dili',
//     'Asia/Ashgabat',
//     'Africa/Tunis',
//     'Pacific/Tongatapu',
//     'Europe/Istanbul',
//     'America/Port_of_Spain',
//     'Pacific/Funafuti',
//     'Asia/Taipei',
//     'Europe/Kiev',
//     'Europe/Uzhgorod',
//     'Europe/Zaporozhye',
//     'Pacific/Wake',
//     'America/New_York',
//     'America/Detroit',
//     'America/Kentucky/Louisville',
//     'America/Kentucky/Monticello',
//     'America/Indiana/Indianapolis',
//     'America/Indiana/Vincennes',
//     'America/Indiana/Winamac',
//     'America/Indiana/Marengo',
//     'America/Indiana/Petersburg',
//     'America/Indiana/Vevay',
//     'America/Chicago',
//     'America/Indiana/Tell_City',
//     'America/Indiana/Knox',
//     'America/Menominee',
//     'America/North_Dakota/Center',
//     'America/North_Dakota/New_Salem',
//     'America/North_Dakota/Beulah',
//     'America/Denver',
//     'America/Boise',
//     'America/Phoenix',
//     'America/Los_Angeles',
//     'America/Anchorage',
//     'America/Juneau',
//     'America/Sitka',
//     'America/Metlakatla',
//     'America/Yakutat',
//     'America/Nome',
//     'America/Adak',
//     'Pacific/Honolulu',
//     'America/Montevideo',
//     'Asia/Samarkand',
//     'Asia/Tashkent',
//     'America/Caracas',
//     'Asia/Ho_Chi_Minh',
//     'Pacific/Efate',
//     'Pacific/Wallis',
//     'Pacific/Apia',
//     'Africa/Johannesburg'];
