import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Btn from "../Button";
import { useForm, Controller } from "react-hook-form";
import { PostLogin } from "../../Api/Auth";

export default function Login(props) {

  const [response, setResponse] = useState({ status: 0, message: "" });
  const [btnDisable, setBtnDisable] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    setResponse((prev) => ({ ...prev, status: 0 }));
    setBtnDisable(() => true);
    let response = await PostLogin(data);

    if (response.valid) {
      setResponse((prev) => ({ ...prev, status: 1, message: response.msg }));
      setTimeout(() => {
        props.navigation.navigate("NewMemberChecklist")
      }, 1500);
    } else {
      setResponse((prev) => ({ ...prev, status: 2, message: response.error }));
      setBtnDisable(() => false);
    }
  }

  return (
    <View style={styles.mainContainer}>

      <Image source={require("../../../assets/images/logoSmall.jpg")} />
      <Text style={styles.heading}>  Log In  </Text>

      <View style={styles.headerBox}>
        <Text style={{ fontSize: 16 }}>New member ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
          <Text style={{ color: "#3d9be9", fontWeight: "bold", fontSize: 16 }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
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
              style={styles.loginInputField}
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
              style={styles.loginInputField}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.errMsg}>{errors.password.message}</Text>}

      </View>

      <View style={styles.forgotPasswordBox}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Btn textColor="white" bgColor={btnDisable ? "rgba(0,0,0,0.4)" : "#000"} btnLabel="Login" Press={handleSubmit(onSubmit)} disabled={btnDisable} />
      {(response.status === 1) && <Text style={styles.successMsg}>{response.message}</Text>}
      {(response.status === 2) && <Text style={styles.errMsg}>{response.message}</Text>}

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
  },
  heading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 36
  },
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    width: "100%",
    alignContent: "center",
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  loginInputField: {
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
  forgotPasswordBox: {
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  forgotPassword: {
    color: "#000",
    fontSize: 14,
    textDecorationLine: "underline"
  }
});
