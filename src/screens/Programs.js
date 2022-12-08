import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  FlatList,
} from "react-native";
import DashboardUser from "../components/DashboardUser";
import Header from "../components/Header";
import { GetFeeds } from "../Api/Dashboard";

export default function Programs(props) {
  console.log("Program Data: ", props);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const {
    bgImg,
    title,
    description,
    duration,
    badge,
    viewCount,
    readerCount,
    objectives,
    schedule,
    nutrition,
    intensity,
    prerequisites,
    previewText,
    workouts,
  } = props.programData;

  // objectives: [
  //   "Muscle-Stimulation",
  //   "Technique/Repetition",
  //   "Balance-Core/Stability",
  // ],
  // workouts: [
  //   {
  //     week: 1,
  //     day: 1,
  //     type: "LOWER BODY",
  //     exercise: "Quads, Hamstrings, Glutes",
  //     workoutBgImg:
  //       "https://static.wixstatic.com/media/11c3fa_07650c42fa6d4f2ea64639e00bbcd808~mv2.jpg/v1/fill/w_640,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c3fa_07650c42fa6d4f2ea64639e00bbcd808~mv2.jpg",
  //   },
  // ],

  useEffect(() => {
    const getData = async () => {
      let response = await GetFeeds();
      response.valid && setTaskItems(response.workouts);
    };
    getData();
  }, []);

  const renderItem = ({ item }) => (
    <DashboardUser
      navigation={props.navigation}
      userInfo={item}
      likeCount={item.like}
    />
  );

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{duration}</Text>
      <Text>{viewCount}</Text>
      <Text>{readerCount}</Text>
      <Text>{objectives}</Text>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 50,
  },
  tasksWrapper: {
    paddingTop: 0,
  },
  items: {
    marginVertical: 20,
  },
});
