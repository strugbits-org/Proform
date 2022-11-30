import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login/Index";
import SignUp from "./src/components/SignUp/Index";
import ForgotPassword from "./src/components/ForgotPassword/Index";
import ConfirmationBox from "./src/components/ConfirmationBox/Index";
import DashboardUser from "./src/screens/Dashboard";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View></View>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DashboardUser"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="DashboardUser" component={DashboardUser} />
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
});
