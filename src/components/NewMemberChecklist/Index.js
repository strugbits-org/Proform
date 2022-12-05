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

  const onChangeHandler = (name, value) => {
    setChecked((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (data) => {
    setResponse((prev) => ({ ...prev, status: 0 }));
    setBtnDisable(() => true);

    let goals = [];
    if (
      isChecked.Performance ||
      isChecked.FatLoss ||
      isChecked.TrySomethingNew
    ) {
      isChecked.Performance && goals.push("Performance");
      isChecked.FatLoss && goals.push("Fat-Loss");
      isChecked.TrySomethingNew && goals.push("Try Something New");
      data.goals = goals;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image source={require("../../../assets/images/logoSmall.jpg")} />
      <Text style={styles.heading}>NEW MEMBER CHECK LIST</Text>
      <Text>Task to complete for new users!</Text>

      <ScrollView style={styles.form}>
        <TouchableOpacity
          style={styles.checkBoxContainer}
          onPress={() => props.navigation.navigate("CompleteProfile")}
        >
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.agreeCheckBox}>
                <View style={styles.sectionCheckBox}>
                  <Checkbox
                    style={styles.checkboxCheckBox}
                    value={value}
                    onBlur={onBlur}
                    onValueChange={onChange}
                  />
                  <Text style={styles.paragraphCheckBox}>Complete Profile</Text>
                </View>
              </View>
            )}
            name="agree"
          />
          {errors.agree && (
            <Text style={styles.errMsg}>{errors.agree.message}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkBoxContainer}
          onPress={() => props.navigation.navigate("AccountSetup")}
        >
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.agreeCheckBox}>
                <View style={styles.sectionCheckBox}>
                  <Checkbox
                    disable
                    style={styles.checkboxCheckBox}
                    value={value}
                    onBlur={onBlur}
                    onValueChange={onChange}
                  />
                  <Text style={styles.paragraphCheckBox}>Account Setup</Text>
                </View>
              </View>
            )}
            name="agree"
          />
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
      </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  headerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  form: {
    width: "100%",
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
    marginTop: 20,
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
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  checkBoxContainer: {
    border: 1,
  },
});
