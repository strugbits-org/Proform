import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Btn from "../Button";
import { PostForgotPassword } from "../../Api/Auth";

export default function ForgotPassword(props) {

  const [response, setResponse] = useState({ status: 0, message: "" });
  const [btnDisable, setBtnDisable] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = async (data) => {
    setResponse((prev) => ({ ...prev, status: 0 }));
    setBtnDisable(() => true);
    let response = await PostForgotPassword(data);
    if (response.valid) {
      setResponse((prev) => ({ ...prev, status: 1, message: response.msg }));
      setTimeout(() => {
        props.navigation.navigate("ConfirmationBox")
      }, 1500);
    } else {
      setResponse((prev) => ({ ...prev, status: 2, message: response.error }));
      setBtnDisable(() => false);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: "#000", fontWeight: "bold", fontSize: 40, textAlign: "center" }}>
        Create New Password
      </Text>
      <View style={styles.subHeading}>
        <Text>Please enter your email address</Text>
      </View>



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
            placeholder="Email"
            onBlur={onBlur}
            style={styles.inputField}
            placeholderTextColor="#000"
          />
        )}
        name="email"
      />
      <View style={styles.errBox}>
        {errors.email && <Text style={styles.errMsg}>{errors.email.message}</Text>}

      </View>

      <Btn marginTop={20}
        textColor="white" bgColor={btnDisable ? "rgba(0,0,0,0.4)" : "#000"}
        btnLabel="Create Password"
        Press={handleSubmit(onSubmit)}
        disabled={btnDisable} />
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
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginTop: 30,
    lineHeight: 2,
    width: "80%",
  },
  subHeading: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 15,
  },
  errBox: {
    display: "flex",
    justifyContent: "flex-start",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
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
