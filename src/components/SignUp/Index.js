import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import Btn from "../Button/Index";
import Checkbox from "expo-checkbox";
import { useForm, Controller } from "react-hook-form";
import { PostSignUp } from "../../Api/Auth";

export default function SignUp(props) {
  const [isChecked, setChecked] = useState({
    Performance: false,
    FatLoss: false,
    TrySomethingNew: false,
  });

  const [response, setResponse] = useState({ status: 0, message: "" });
  const [btnDisable, setBtnDisable] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      agree: false
    }
  });

  const onChangeHandler = (name, value) => {
    setChecked((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (data) => {
    setBtnDisable(() => true);

    let goals = [];
    if (isChecked.Performance || isChecked.FatLoss || isChecked.TrySomethingNew) {
      isChecked.Performance && goals.push("Performance")
      isChecked.FatLoss && goals.push("Fat-Loss")
      isChecked.TrySomethingNew && goals.push("Try Something New")
      data.goals = goals
    }
    let response = await PostSignUp(data);

    if (response.valid) {
      setResponse((prev) => ({ ...prev, status: 1, message: response.msg }));
      setTimeout(() => {
        props.navigation.navigate("Dashboard")
      }, 1500);
    } else {
      setResponse((prev) => ({ ...prev, status: 2, message: response.error }));
      setBtnDisable(() => false);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>
        Create your <Text>FREE</Text> Account
      </Text>
      <View style={styles.headerBox}>
        <Text style={{ fontSize: 12 }}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.form}>
        <Controller
          control={control}
          rules={{
            required: { value: true, message: "Email is required" },
            pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Please enter a valid email address" }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Account Email"
              onBlur={onBlur}
              style={styles.inputField}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.errMsg}>{errors.email.message}</Text>}

        <Controller
          control={control}
          rules={{
            required: { value: true, message: "Password is required" },
            minLength: { value: 4, message: "Password must be at least 4 characters" },
            maxLength: { value: 100, message: "Password must be less then 100 characters" },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.inputField}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.errMsg}>{errors.password.message}</Text>}

        <View style={styles.containerCheckBox}>
          <Text style={{ color: "#000", fontSize: 18, marginBottom: 10 }}>
            Fitness Goals: *
          </Text>
          <View style={styles.sectionCheckBox}>
            <Checkbox
              style={styles.checkboxCheckBox}
              value={isChecked.Performance}
              onValueChange={(checked) => onChangeHandler("Performance", checked)}
            />
            <Text style={styles.paragraphCheckBox}>Performance</Text>
          </View>
          <View style={styles.sectionCheckBox}>
            <Checkbox
              style={styles.checkboxCheckBox}
              value={isChecked.FatLoss}
              onValueChange={(checked) => onChangeHandler("FatLoss", checked)}
            />
            <Text style={styles.paragraphCheckBox}>Fat-Loss</Text>
          </View>
          <View style={styles.sectionCheckBox}>
            <Checkbox
              style={styles.checkboxCheckBox}
              value={isChecked.TrySomethingNew}
              onValueChange={(checked) =>
                onChangeHandler("TrySomethingNew", checked)
              }
            />
            <Text style={styles.paragraphCheckBox}>Try Something New</Text>
          </View>
        </View>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Sign Up Code (Optional)"
              onBlur={onBlur}
              style={styles.inputField}
            />
          )}
          name="signUpCode"
        />

        <Controller
          control={control}
          rules={{
            required: { value: true, message: "Please tick the box above" },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.agreeCheckBox}>
              <View style={styles.sectionCheckBox}>
                <Checkbox
                  style={styles.checkboxCheckBox}
                  value={value}
                  onBlur={onBlur}

                  onValueChange={onChange}
                />
                <Text style={styles.paragraphCheckBox}>
                  I agree to the site terms & conditions
                </Text>
              </View>
            </View>
          )}
          name="agree"
        />
        {errors.agree && <Text style={styles.errMsg}>{errors.agree.message}</Text>}
        <View style={styles.btnBox}>
          <Btn textColor="white" bgColor={btnDisable ? "rgba(0,0,0,0.4)" : "#000"}
            btnLabel="Create Account"
            Press={handleSubmit(onSubmit)}
            disabled={btnDisable} />

          {(response.status === 1) && <Text style={styles.successMsg}>{response.message}</Text>}
          {(response.status === 2) && <Text style={styles.errMsg}>{response.message}</Text>}
        </View>
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
    fontSize: 24
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
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginTop: 20,
    lineHeight: 2,
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
  containerCheckBox: {
    marginTop: 20,
    width: "100%",
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
    alignItems: "center"
  }
});
