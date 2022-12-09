import React, { useEffect, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import { GetUserInfo } from "../../Api/User";
import { AuthContext } from "../../context/AuthContext";
import { useIsFocused } from "@react-navigation/native";

export default function NewMemberChecklist(props) {
  const { userData, setUserAccountData, userAccountData } = useContext(AuthContext);
  const [isProfileDone, setIsProfileDone] = useState(false)
  const isFocused = useIsFocused();

  useEffect(() => {
    const getMemberInfo = async () => {
      let response = await GetUserInfo(userData._id);
      setUserAccountData(response.user);
      const { fullNames, username, profile } = response.user;
      if (fullNames && username && profile) {
        setIsProfileDone(true)
      }
    }
    getMemberInfo()
  }, [isFocused])

  return (
    <View style={styles.mainContainer}>
      <Image source={require("../../../assets/images/logoSmall.jpg")} />
      <Text style={styles.heading}>NEW MEMBER CHECK LIST</Text>
      <Text>Task to complete for new users!</Text>

      <View style={styles.form}>
        <TouchableOpacity
          style={styles.checkBoxContainer}
          onPress={() => props.navigation.navigate("CompleteProfile")}
          disabled={isProfileDone}
        >
          <View style={styles.agreeCheckBox}>
            <View style={styles.sectionCheckBox}>
              <Checkbox style={styles.checkboxCheckBox} value={isProfileDone} disabled />
              <Text style={styles.paragraphCheckBox}>Complete Profile</Text>
            </View>
          </View>
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
        </TouchableOpacity>
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