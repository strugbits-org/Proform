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
import Header from "../components/Header/Index";
import { GetFeeds } from "../Api/Dashboard"

export default function Dashboard(props) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await GetFeeds();
      response.valid && setTaskItems(response.workouts)
      console.log("Response: ", response);
    }
    getData()
  },[])

  const renderItem = ({ item }) => (
    <DashboardUser
      navigation={props.navigation}
      userInfo={item} />
  );

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />

      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          <FlatList
            data={taskItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tasksWrapper: {
    paddingTop: 0,
  },
  items: {
    marginVertical: 20,
  },
});
