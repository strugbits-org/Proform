import { AuthContext } from "../context/AuthContext";
import React, { useContext, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../components/Login";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import ConfirmationBox from "../components/ConfirmationBox";
import CompleteProfile from "../components/CompleteProfile";
import NewMemberChecklist from "../components/NewMemberChecklist";
import AccountSetup from "../components/AccountSetup";
import OnLoadModal from "../components/OnLoadModal";
import Dashboard from "../screens/Dashboard";
import Programs from "../screens/Programs";

const AppNav = (props) => {
  const { isLoading, userToken, drawerOpen } = useContext(AuthContext);
  const Stack = createNativeStackNavigator();

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>;
  }
  console.log("userToken: ", userToken);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userToken !== null ? (
          <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="NewMemberChecklist"
              component={NewMemberChecklist}
            />
            <Stack.Screen name="Programs" component={Programs} />
            <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
            <Stack.Screen name="AccountSetup" component={AccountSetup} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="NewMemberChecklist"
              component={NewMemberChecklist}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="AccountSetup" component={AccountSetup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ConfirmationBox" component={ConfirmationBox} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },
  mainHeader: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 5,
  },
  drawer: {
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 3,
    backgroundColor: "#ff00ff",
  },
  drawerContent: {
    backgroundColor: "#ffffff",
    height: "100%",
    // width: "70%",
    shadowColor: "#000000",
    shadowRadius: 3,
    padding: 50,
  },
});

export default AppNav;
