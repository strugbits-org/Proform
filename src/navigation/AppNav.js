import { AuthContext } from "../context/AuthContext"
import React, { useContext, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Platform,
  StatusBar,
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
import Drawer from 'react-native-drawer'

const Dra = () => {
  return <View>
    <Text> Hellllllloooo </Text>
  </View>
}

const AppNav = () => {
  const { isLoading, userToken, drawerOpen } = useContext(AuthContext);
  const Stack = createNativeStackNavigator();

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
  }
  console.log("userToken: ", userToken);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer
          open={drawerOpen}
          type="overlay"
          tapToClose={true}
          content={<Dra />}
        >

          {userToken !== null ?
            <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="NewMemberChecklist" component={NewMemberChecklist} />
              <Stack.Screen name="Programs" component={Programs} />
              <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
              <Stack.Screen name="AccountSetup" component={AccountSetup} />
            </Stack.Navigator>
            :
            <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="ConfirmationBox" component={ConfirmationBox} />
            </Stack.Navigator>}
        </Drawer>
      </NavigationContainer>
    </View>
  )
}

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
});


export default AppNav