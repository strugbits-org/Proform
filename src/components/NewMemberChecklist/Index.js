import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Btn from "../Button";
import Checkbox from "expo-checkbox";
import { useForm, Controller } from "react-hook-form";

export default function NewMemberChecklist(props) {
  const [isChecked, setChecked] = useState({
    Performance: false,
    FatLoss: false,
    TrySomethingNew: false,
  });

  const [response, setResponse] = useState({ status: 0, message: "" });
  const [btnDisable, setBtnDisable] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      agree: false,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <Image source={require("../../../assets/images/logoSmall.jpg")} />
      <Text style={styles.heading}>NEW MEMBER CHECK LIST</Text>
      <Text>Task to complete for new users!</Text>

      <View style={styles.form}>
        <TouchableOpacity
          style={styles.checkBoxContainer}
          onPress={() => props.navigation.navigate("CompleteProfile")}
          disabled={false}
        >
          <View style={styles.agreeCheckBox}>
            <View style={styles.sectionCheckBox}>
              <Checkbox style={styles.checkboxCheckBox} value="" disabled />
              <Text style={styles.paragraphCheckBox}>Complete Profile</Text>
            </View>
          </View>
          {errors.agree && (
            <Text style={styles.errMsg}>{errors.agree.message}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkBoxContainer}
          onPress={() => props.navigation.navigate("AccountSetup")}
        >
          <View style={styles.agreeCheckBox}>
            <View style={styles.sectionCheckBox}>
              <Checkbox style={styles.checkboxCheckBox} value="" disabled />
              <Text style={styles.paragraphCheckBox}>Account Setup</Text>
            </View>
          </View>
          {errors.agree && (
            <Text style={styles.errMsg}>{errors.agree.message}</Text>
          )}
        </TouchableOpacity>
        {/* <View style={styles.btnBox}>
          <Btn
            textColor="white"
            bgColor={btnDisable ? "rgba(0,0,0,0.4)" : "#000"}
            btnLabel="Create Account"
            Press={handleSubmit(onSubmit)}
            disabled={btnDisable}
          />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
  heading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  form: {
    width: "80%",
  },
  errMsg: {
    color: "red",
    marginTop: 7,
  },
  successMsg: {
    color: "green",
    marginTop: 7,
  },
  agreeCheckBox: {
    // marginTop: 20,
    width: "100%",
  },
  sectionCheckBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraphCheckBox: {
    fontSize: 14,
  },
  checkboxCheckBox: {
    marginVertical: 8,
    marginRight: 8,
  },
  btnBox: {
    // margin: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  checkBoxContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 3,
    marginVertical: 10,
  },
});