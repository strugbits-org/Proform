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

export default function Dashboard(props) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

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
      <Text>PROGRAMS</Text>
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
