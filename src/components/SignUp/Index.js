import Btn from "../Button/Index";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
// import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";

export default function index(props) {
  const [isChecked, setChecked] = useState({
    Performance: false,
    FatLoss: false,
    TrySomethingNew: false,
  });
  const [isAgreed, setAgreed] = useState(false);

  const onChangeHandler = (name, value) => {
    setChecked((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 20,
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ color: "#000", fontWeight: "bold", fontSize: 24 }}>
        Create your <Text>FREE</Text> Account
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Text style={{ fontSize: 12 }}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Account Email"
        keyboardType={"email-address"}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          marginTop: 30,
          lineHeight: 2,
          width: "100%",
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          marginTop: 30,
          lineHeight: 2,
          width: "100%",
        }}
      />
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

      <TextInput
        placeholder="Sign Up Code (Optional)"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          marginTop: 10,
          lineHeight: 2,
          width: "100%",
        }}
      />

      <View style={styles.containerCheckBox}>
        <View style={styles.sectionCheckBox}>
          <Checkbox
            style={styles.checkboxCheckBox}
            value={isAgreed}
            onValueChange={setAgreed}
          />
          <Text style={styles.paragraphCheckBox}>
            I agree to the site terms & conditions
          </Text>
        </View>
      </View>

      <Btn
        textColor="white"
        bgColor="#000"
        btnLabel="Create Account"
        Press={() => alert("Sign Up")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerCheckBox: {
    marginVertical: 40,
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
});
