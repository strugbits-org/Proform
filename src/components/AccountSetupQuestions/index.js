import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "expo-datepicker";
import Checkbox from "expo-checkbox";
import { Icon } from "@rneui/themed";
import Programs from "../../screens/Programs";
// import { UpdateUserInfo } from "../../Api/User";

export default function AccountSetupQuestio(props) {
  const {
    subHeading,
    mainHeading,
    tagLine,
    flowText,
    type,
    upto,
    weekSelection,
  } = props.item;
  const [image, setImage] = useState(null);
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState("Select from dropdown");
  const [gender, setGender] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Prefer Not to Say", value: "Prefer Not to Say" },
  ]);
  const [activityLevelOpen, setActivityLevelOpen] = useState(false);
  const [activityLevelValue, setActivityLevelValue] = useState(null);
  const [activityLevel, setActivityLevel] = useState([
    { label: "Sedentary", value: "Sedentary" },
    { label: "Light", value: "Light" },
    { label: "Moderate", value: "Moderate" },
    { label: "Very Active", value: "Very Active" },
  ]);
  const [weightGoalOpen, setWeightGoalOpen] = useState(false);
  const [weightGoalValue, setWeightGoalValue] = useState(null);
  const [weightGoal, setWeightGoal] = useState([
    { label: "Fat Loss", value: "Fat Loss" },
    { label: "Maintain", value: "Maintain" },
    { label: "Gain", value: "Gain" },
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
    { label: "Antarctica/Palmer", value: "Antarctica/Palmer" },
  ]);

  const [weeklyResetOpen, setWeeklyResetOpen] = useState(false);
  const [weeklyResetValue, setWeeklyResetValue] = useState(null);
  const [weeklyReset, setWeeklyReset] = useState([
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
  ]);

  const [conversionTypeOpen, setConversionTypeOpen] = useState(false);
  const [conversionTypeValue, setConversionTypeValue] = useState(null);
  const [conversionType, setConversionType] = useState([
    { label: "lb", value: "lb" },
    { label: "kg", value: "kg" },
  ]);

  const [date, setDate] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);

  const [isChecked, setChecked] = useState({
    Su: false,
    Mo: false,
    Tu: false,
    We: false,
    Th: false,
    Fr: false,
    Sa: false,
    total: 0,
  });
  const onChangeHandler = (name, value) => {
    if (value) {
      setChecked((prev) => ({
        ...prev,
        [name]: value,
        total: isChecked.total + 1,
      }));
    } else {
      setChecked((prev) => ({
        ...prev,
        [name]: value,
        total: isChecked.total - 1,
      }));
    }
  };

  let [selectedProgram, setSelectedProgram] = useState(0);
  const [programlist, setProgramList] = useState([
    {
      id: "0",
      bgImg:
        "https://static.wixstatic.com/media/11c3fa_97bf3a50fcd149ccbe8d28a01a4bbe01~mv2.jpeg/v1/fill/w_551,h_600,al_c,q_80,enc_auto/11c3fa_97bf3a50fcd149ccbe8d28a01a4bbe01~mv2.jpeg",
      title: "RECONDITIONING",
      description:
        "Whether you are traveling or just letting your body recover, use this program to rehabilitate your muscles and to prepare for the offseason training journey. This program is designed to ease you back into the weight-room after the season's end.",
      duration: "3 WEEKS",
      link: "",
      badge:
        "https://static.wixstatic.com/media/11c3fa_d418f3d924e341e99d1f162a3c6b8b78~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dollar%20sign%20button.png",
      viewCount: 216,
      readerCount: 3448,
      objectives: [
        "Muscle-Stimulation",
        "Technique/Repetition",
        "Balance-Core/Stability",
      ],
      schedule: "3x/Week",
      nutrition: "Fat-Loss",
      intensity: "Low-Medium",
      prerequisites: "",
      previewText:
        "Preview the first week of workouts for this program, or get started by completing one of the workouts below.",
      workouts: [
        {
          week: 1,
          day: 1,
          type: "LOWER BODY",
          exercise: "Quads, Hamstrings, Glutes",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_07650c42fa6d4f2ea64639e00bbcd808~mv2.jpg/v1/fill/w_640,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c3fa_07650c42fa6d4f2ea64639e00bbcd808~mv2.jpg",
        },
        {
          week: 1,
          day: 2,
          type: "UPPER BODY",
          exercise: "Back, Shoulder, Chest",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_06b47ebb689b4c93a01b9403a7fe5c8e~mv2.jpg/v1/fill/w_640,h_270,al_c,lg_1,q_80,enc_auto/11c3fa_06b47ebb689b4c93a01b9403a7fe5c8e~mv2.jpg",
        },
        {
          week: 1,
          day: 3,
          type: "FULL BODY",
          exercise: "Glutes, Hips, Back",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_b15360d9f4cd4d8d95eacec118972d22~mv2.jpg/v1/fill/w_640,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c3fa_b15360d9f4cd4d8d95eacec118972d22~mv2.jpg",
        },
      ],
    },
    {
      id: "1",
      bgImg:
        "https://static.wixstatic.com/media/11c3fa_ac23a9ae4a7543c1abda4e85638bd9d1~mv2.jpeg/v1/fill/w_604,h_702,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11c3fa_ac23a9ae4a7543c1abda4e85638bd9d1~mv2.jpeg",
      title: "FORMULA-1",
      description:
        "This 4 week program covers all of the basics in performance training with limited equipment and resources. It's designed for beginner level athletes looking for something fresh and effective. Choose this program to become better familiar with ProformApp and all of its functions.",
      duration: "4 WEEKS",
      link: "",
      badge:
        "https://static.wixstatic.com/media/11c3fa_9fbbcd7b5ac343d0945bbcbfa3eebcdf~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dollar%20sign%20button.png",
      viewCount: 216,
      readerCount: 3448,
      objectives: [
        "Muscle-Stimulation",
        "Technique/Repetition",
        "Balance-Core/Stability",
      ],
      schedule: "3x/Week",
      nutrition: "Fat-Loss",
      intensity: "Low-Medium",
      prerequisites: "",
      previewText:
        "Preview the first week of workouts for this program, or get started by completing one of the workouts below.",
      workouts: [
        {
          week: 1,
          day: 1,
          type: "LOWER BODY",
          exercise: "Quads, Hamstrings, Glutes",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_07650c42fa6d4f2ea64639e00bbcd808~mv2.jpg/v1/fill/w_640,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c3fa_07650c42fa6d4f2ea64639e00bbcd808~mv2.jpg",
        },
        {
          week: 1,
          day: 2,
          type: "UPPER BODY",
          exercise: "Back, Shoulder, Chest",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_06b47ebb689b4c93a01b9403a7fe5c8e~mv2.jpg/v1/fill/w_640,h_270,al_c,lg_1,q_80,enc_auto/11c3fa_06b47ebb689b4c93a01b9403a7fe5c8e~mv2.jpg",
        },
        {
          week: 1,
          day: 3,
          type: "FULL BODY",
          exercise: "Glutes, Hips, Back",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_b15360d9f4cd4d8d95eacec118972d22~mv2.jpg/v1/fill/w_640,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c3fa_b15360d9f4cd4d8d95eacec118972d22~mv2.jpg",
        },
      ],
    },
    {
      id: "2",
      bgImg:
        "https://static.wixstatic.com/media/11c3fa_ddde58f3b02c4abaacdc4e0c1bf65101~mv2.jpeg/v1/fill/w_604,h_658,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11c3fa_ddde58f3b02c4abaacdc4e0c1bf65101~mv2.jpeg",
      title: "ALPHA-PUMP",
      description:
        "This 3 week workout is an intro program into the fundamentals of hypertrophy. This is a moderately challenging workout program designed to help you increase muscle mass and master isolation exercises in a few short weeks.",
      duration: "3 WEEKS",
      link: "",
      badge:
        "https://static.wixstatic.com/media/11c3fa_9fbbcd7b5ac343d0945bbcbfa3eebcdf~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dollar%20sign%20button.png",
      viewCount: 216,
      readerCount: 3448,
      objectives: [
        "Muscle-Stimulation",
        "Technique/Repetition",
        "Balance-Core/Stability",
      ],
      schedule: "3x/Week",
      nutrition: "Fat-Loss",
      intensity: "Low-Medium",
      prerequisites: "",
      previewText:
        "Preview the first week of workouts for this program, or get started by completing one of the workouts below.",
      workouts: [
        {
          week: 1,
          day: 1,
          type: "LOWER BODY",
          exercise: "Quads, Hamstrings, Glutes",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_07650c42fa6d4f2ea64639e00bbcd808~mv2.jpg/v1/fill/w_640,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c3fa_07650c42fa6d4f2ea64639e00bbcd808~mv2.jpg",
        },
        {
          week: 1,
          day: 2,
          type: "UPPER BODY",
          exercise: "Back, Shoulder, Chest",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_06b47ebb689b4c93a01b9403a7fe5c8e~mv2.jpg/v1/fill/w_640,h_270,al_c,lg_1,q_80,enc_auto/11c3fa_06b47ebb689b4c93a01b9403a7fe5c8e~mv2.jpg",
        },
        {
          week: 1,
          day: 3,
          type: "FULL BODY",
          exercise: "Glutes, Hips, Back",
          workoutBgImg:
            "https://static.wixstatic.com/media/11c3fa_b15360d9f4cd4d8d95eacec118972d22~mv2.jpg/v1/fill/w_640,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c3fa_b15360d9f4cd4d8d95eacec118972d22~mv2.jpg",
        },
      ],
    },
  ]);

  const programItem = ({ item }) => {
    let imgSrc = { uri: item.bgImg };
    let badgeSrc = { uri: item.badge };
    return (
      <View style={{ width: "100%", margin: "auto", marginVertical: 15 }}>
        <ImageBackground
          style={{
            paddingVertical: 40,
            paddingHorizontal: 20,
            textAlign: "center",
          }}
          source={imgSrc}
          // source={{ uri: "../../../assets/images/reconditioning.webp" }}
          resizeMode="cover"
        >
          {/* <Image source={require("../../../assets/images/reconditioning.webp")} /> */}
          <Image style={styles.badgeImg} source={badgeSrc} />
          <Text style={styles.programItemHeading}>{item.title}</Text>
          <Text style={styles.programItemWeeks}>{item.duration}</Text>
          <Text style={styles.programItemDescription}>{item.description}</Text>

          <TouchableOpacity
            onPress={() => {
              setSelectedProgram(Number(item.id));
              props.setCurrentQuestion(props.currentQuestion + 1);
              // props.navigation.navigate("Programs");
            }}
            style={styles.programItemBtn}
          >
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
              View Program
            </Text>
            <Icon
              name="th"
              type="font-awesome"
              color="#fff"
              style={{
                backgroundColor: "#000",
                padding: 5,
                borderRadius: 50,
                width: 25,
                height: 25,
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [multiCheckError, setMultiCheckError] = useState(false);

  const checkBoxHandler = (type) => {
    if (
      isChecked.Su ||
      isChecked.Mo ||
      isChecked.Tu ||
      isChecked.We ||
      isChecked.Th ||
      isChecked.Fr ||
      isChecked.Sa
    ) {
      onSubmit(type);
    } else {
      setMultiCheckError(true);
    }
  };
  const onSubmit = async (data) => {
    setChecked({
      Su: false,
      Mo: false,
      Tu: false,
      We: false,
      Th: false,
      Fr: false,
      Sa: false,
      total: 0,
    });
    setMultiCheckError(false);

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

  return (
    <View style={styles.mainContainer}>
      {subHeading && <Text style={styles.subHeading}>{subHeading}</Text>}
      {mainHeading && <Text style={styles.mainHeading}>{mainHeading}</Text>}
      {tagLine && <Text style={styles.tagLine}>{tagLine}</Text>}
      {flowText && <Text style={styles.flowText}>{flowText}</Text>}

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
            <Controller
              control={control}
              rules={{
                required: { value: true, message: "Gender is required" },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DropDownPicker
                  style={styles.dropdown}
                  open={genderOpen}
                  onBlur={onBlur}
                  value={value}
                  items={gender}
                  setOpen={setGenderOpen}
                  setValue={setGenderValue}
                  setItems={setGender}
                  placeholder={genderValue}
                  onSelectItem={onChange}
                />
              )}
              name="genderInput"
            />
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.genderInput && (
            <Text style={styles.errMsg}>{errors.genderInput.message}</Text>
          )}
        </View>
      )}
      {type === "dob" && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "Date Of Birth is required" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                date={date}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
              />
            )}
            name="dobInput"
          />

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.dobInput && (
            <Text style={styles.errMsg}>{errors.dobInput.message}</Text>
          )}
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
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Activity Level is required",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DropDownPicker
                  style={styles.dropdown}
                  onBlur={onBlur}
                  value={value}
                  onSelectItem={onChange}
                  open={activityLevelOpen}
                  items={activityLevel}
                  setOpen={setActivityLevelOpen}
                  setValue={setActivityLevelValue}
                  setItems={setActivityLevel}
                  placeholder={activityLevelValue}
                />
              )}
              name="activityInput"
            />
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.activityInput && (
            <Text style={styles.errMsg}>{errors.activityInput.message}</Text>
          )}
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
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Weight goal is required",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DropDownPicker
                  style={styles.dropdown}
                  onBlur={onBlur}
                  value={value}
                  onSelectItem={onChange}
                  open={weightGoalOpen}
                  items={weightGoal}
                  setOpen={setWeightGoalOpen}
                  setValue={setWeightGoalValue}
                  setItems={setWeightGoal}
                  placeholder={weightGoalValue}
                />
              )}
              name="weightInput"
            />
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.weightInput && (
            <Text style={styles.errMsg}>{errors.weightInput.message}</Text>
          )}
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
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Time Zone is required",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DropDownPicker
                  style={styles.dropdown}
                  onBlur={onBlur}
                  value={value}
                  onSelectItem={onChange}
                  open={timeZoneOpen}
                  items={timeZone}
                  setOpen={setTimeZoneOpen}
                  setValue={setTimeZoneValue}
                  setItems={setTimeZone}
                  placeholder={timeZoneValue}
                />
              )}
              name="timZoneInput"
            />
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.timZoneInput && (
            <Text style={styles.errMsg}>{errors.timZoneInput.message}</Text>
          )}
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
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Weekly Reset is required",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DropDownPicker
                  style={styles.dropdown}
                  onBlur={onBlur}
                  value={value}
                  onSelectItem={onChange}
                  open={weeklyResetOpen}
                  items={weeklyReset}
                  setOpen={setWeeklyResetOpen}
                  setValue={setWeeklyResetValue}
                  setItems={setWeeklyReset}
                  placeholder={weeklyResetValue}
                />
              )}
              name="weeklyResetInput"
            />
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.weeklyResetInput && (
            <Text style={styles.errMsg}>{errors.weeklyResetInput.message}</Text>
          )}
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
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Conversion Type is required",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DropDownPicker
                  style={styles.dropdown}
                  onBlur={onBlur}
                  value={value}
                  onSelectItem={onChange}
                  open={conversionTypeOpen}
                  items={conversionType}
                  setOpen={setConversionTypeOpen}
                  setValue={setConversionTypeValue}
                  setItems={setConversionType}
                  placeholder={conversionTypeValue}
                />
              )}
              name="conversionTypeInput"
            />
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.conversionTypeInput && (
            <Text style={styles.errMsg}>
              {errors.conversionTypeInput.message}
            </Text>
          )}
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
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "Please tick the box above" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.agreeCheckBox}>
                <View
                  style={[
                    styles.sectionCheckBox,
                    {
                      flexDirection: "row",
                      paddingHorizontal: 20,
                    },
                  ]}
                >
                  <Checkbox
                    style={styles.checkboxCheckBox}
                    value={value}
                    onBlur={onBlur}
                    onValueChange={onChange}
                  />
                  <Text style={[styles.paragraphCheckBox, { marginLeft: 10 }]}>
                    I agree to the site terms & conditions
                  </Text>
                </View>
              </View>
            )}
            name="autoAdjustCheck"
          />
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.autoAdjustCheck && (
            <Text style={styles.errMsg}>{errors.autoAdjustCheck.message}</Text>
          )}
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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Current Weight is required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="0"
                    keyboardType="number-pad"
                    style={styles.numInputField}
                    placeholderTextColor="#000000"
                  />
                )}
                name="currentWeightInput"
              />
            </View>
            <View>
              <Text style={{ fontSize: 80, marginHorizontal: 10 }}>lb</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.currentWeightInput && (
            <Text style={styles.errMsg}>
              {errors.currentWeightInput.message}
            </Text>
          )}
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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Goal Weight is required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="0"
                    keyboardType="number-pad"
                    style={styles.numInputField}
                    placeholderTextColor="#000000"
                  />
                )}
                name="goalWeightInput"
              />
            </View>
            <View>
              <Text style={{ fontSize: 80, marginHorizontal: 10 }}>lb</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.goalWeightInput && (
            <Text style={styles.errMsg}>{errors.goalWeightInput.message}</Text>
          )}
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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Body Fat is required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="0"
                    keyboardType="number-pad"
                    placeholderTextColor="#000000"
                    style={styles.numInputField}
                  />
                )}
                name="bodyFatInput"
              />
            </View>
            <View>
              <Text style={{ fontSize: 80, marginHorizontal: 10 }}>%</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.bodyFatInput && (
            <Text style={styles.errMsg}>{errors.bodyFatInput.message}</Text>
          )}
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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Calorie Goal is required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="0"
                    keyboardType="number-pad"
                    style={styles.numInputField}
                    placeholderTextColor="#000000"
                  />
                )}
                name="calorieInput"
              />
            </View>
            <View>
              <Text>Calories (per Week)</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.calorieInput && (
            <Text style={styles.errMsg}>{errors.calorieInput.message}</Text>
          )}
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
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Height is required",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      value={value}
                      onBlur={onBlur}
                      placeholder="0"
                      keyboardType="number-pad"
                      style={styles.numInputField}
                      placeholderTextColor="#000000"
                    />
                  )}
                  name="heightInput"
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
                  placeholderTextColor="#000000"
                />
              </View>
              <View>
                <Text style={{ fontSize: 80, marginHorizontal: 10 }}>in</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.heightInput && (
            <Text style={styles.errMsg}>{errors.heightInput.message}</Text>
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
                disabled={!isChecked.Su && isChecked.total >= upto}
                onValueChange={(checked) => onChangeHandler("Su", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Su</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Mo}
                disabled={!isChecked.Mo && isChecked.total >= upto}
                onValueChange={(checked) => onChangeHandler("Mo", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Mo</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Tu}
                disabled={!isChecked.Tu && isChecked.total >= upto}
                onValueChange={(checked) => onChangeHandler("Tu", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Tu</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.We}
                disabled={!isChecked.We && isChecked.total >= upto}
                onValueChange={(checked) => onChangeHandler("We", checked)}
              />
              <Text style={styles.paragraphCheckBox}>We</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Th}
                disabled={!isChecked.Th && isChecked.total >= upto}
                onValueChange={(checked) => onChangeHandler("Th", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Th</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Fr}
                disabled={!isChecked.Fr && isChecked.total >= upto}
                onValueChange={(checked) => onChangeHandler("Fr", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Fr</Text>
            </View>
            <View style={styles.sectionCheckBox}>
              <Checkbox
                style={styles.checkboxCheckBox}
                value={isChecked.Sa}
                disabled={!isChecked.Sa && isChecked.total >= upto}
                onValueChange={(checked) => onChangeHandler("Sa", checked)}
              />
              <Text style={styles.paragraphCheckBox}>Sa</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => checkBoxHandler(weekSelection)}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {multiCheckError && (
            <Text style={styles.errMsg}>Please Select atleast one day.</Text>
          )}
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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Bench Press is required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="0"
                    keyboardType="number-pad"
                    placeholderTextColor="#000000"
                    style={styles.numInputField}
                  />
                )}
                name="benchPressInput"
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
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.benchPressInput && (
            <Text style={styles.errMsg}>{errors.benchPressInput.message}</Text>
          )}
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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Back Squat is required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="0"
                    keyboardType="number-pad"
                    placeholderTextColor="#000000"
                    style={styles.numInputField}
                  />
                )}
                name="backSquatInput"
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
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.backSquatInput && (
            <Text style={styles.errMsg}>{errors.backSquatInput.message}</Text>
          )}
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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Power Clean is required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="0"
                    keyboardType="number-pad"
                    style={styles.numInputField}
                    placeholderTextColor="#000000"
                  />
                )}
                name="powerCleanInput"
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
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.powerCleanInput && (
            <Text style={styles.errMsg}>{errors.powerCleanInput.message}</Text>
          )}
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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Dead Lift is required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="0"
                    keyboardType="number-pad"
                    style={styles.numInputField}
                    placeholderTextColor="#000000"
                  />
                )}
                name="deadLiftInput"
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
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          {errors.deadLiftInput && (
            <Text style={styles.errMsg}>{errors.deadLiftInput.message}</Text>
          )}
        </View>
      )}
      {type === "program" && (
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              width: "100%",
            }}
          >
            <FlatList
              data={programlist}
              renderItem={programItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      )}
      {type === "programItem" && (
        <View>
          <Programs programData={programlist[selectedProgram]} />
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
    padding: 10,
    paddingBottom: 0,
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
    height: 30,
    paddingVertical: 0,
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
    zIndex: 11,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
    borderRadius: 0,
    zIndex: 10,
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
  programItemHeading: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 7,
  },
  programItemWeeks: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    marginBottom: 30,
    fontWeight: "700",
  },
  programItemDescription: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
  },
  badgeImg: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 20,
    top: 20,
  },
  programItemBtn: {
    color: "#000",
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 8,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  errMsg: {
    color: "red",
    marginTop: 7,
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
