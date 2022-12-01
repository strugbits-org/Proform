import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import DashboardUser from "../components/DashboardUser/Index";

export default function Dashboard(props) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([
    {
      userImage: "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
      userName: "User 1",
      taskStatus: "Incomplete",
      workoutTitle: "SQUAT-PREP",
      programName: "Power Prep",
      week: "3",
      day: "1",
      webDynamicURL: "www.google.com",
    },
    {
      userImage: "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
      userName: "User 2",
      taskStatus: "Complete",
      workoutTitle: "LOWER BODY",
      programName: "And-1",
      week: "3",
      day: "1",
      webDynamicURL: "www.google.com",
    },
    {
      userImage: "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
      userName: "User 3",
      taskStatus: "Complete",
      workoutTitle: "LOWER BODY",
      programName: "And-1",
      week: "3",
      day: "1",
      webDynamicURL: "www.google.com",
    },
    {
      userImage: "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
      userName: "User 4",
      taskStatus: "Complete",
      workoutTitle: "LOWER BODY",
      programName: "And-1",
      week: "3",
      day: "1",
      webDynamicURL: "www.google.com",
    },
    {
      userImage: "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
      userName: "User 5",
      taskStatus: "Complete",
      workoutTitle: "LOWER BODY",
      programName: "And-1",
      week: "3",
      day: "1",
      webDynamicURL: "www.google.com",
    },
    {
      userImage: "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
      userName: "User 6",
      taskStatus: "Complete",
      workoutTitle: "LOWER BODY",
      programName: "And-1",
      week: "3",
      day: "1",
      webDynamicURL: "www.google.com",
    },
    {
      userImage: "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
      userName: "User 7",
      taskStatus: "Complete",
      workoutTitle: "LOWER BODY",
      programName: "And-1",
      week: "3",
      day: "1",
      webDynamicURL: "www.google.com",
    },
  ]);

  return (
    <View style={styles.container}>
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
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                //   onPress={() => completeTask(index)}
                >
                  <DashboardUser navigation={props.navigation} userInfo={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tasksWrapper: {
    paddingTop: 40,
  },
  items: {
    marginTop: 30,
  },
});
