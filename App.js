import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import ForgotPassword from "./src/components/ForgotPassword";
import ConfirmationBox from "./src/components/ConfirmationBox";
import CompleteProfile from "./src/components/CompleteProfile";
import Dashboard from "./src/screens/Dashboard";
import NewMemberChecklist from "./src/components/NewMemberChecklist";
import AccountSetup from "./src/components/AccountSetup";
import Programs from "./src/screens/Programs";

import { StyleSheet, View, Platform, StatusBar, Text } from "react-native";
import OnLoadModal from "./src/components/OnLoadModal";

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="NewMemberChecklist"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="NewMemberChecklist"
            component={NewMemberChecklist}
          />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Programs" component={Programs} />
          <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
          <Stack.Screen name="AccountSetup" component={AccountSetup} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ConfirmationBox" component={ConfirmationBox} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    // </ScrollView>
  );
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
