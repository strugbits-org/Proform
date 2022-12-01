import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login/Index";
import SignUp from "./src/components/SignUp/Index";
import ForgotPassword from "./src/components/ForgotPassword/Index";
import ConfirmationBox from "./src/components/ConfirmationBox/Index";
import CompleteProfile from "./src/components/CompleteProfile/Index";
import DashboardUser from "./src/screens/Dashboard";
import { Icon } from "@rneui/themed";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <View>
          <Icon name="search" type="font-awesome" color="#1387DB" />
        </View>
        <View>
          <Image source={require("./assets/images/logoSmall.jpg")} />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("====================================");
              console.log("Click");
              console.log("====================================");
              props.navigation.navigate("Login");
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./assets/images/user.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CompleteProfile"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="DashboardUser" component={DashboardUser} />
          <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
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
