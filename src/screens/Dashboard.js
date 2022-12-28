import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import DashboardUser from "../components/DashboardUser";
import Header from "../components/Header";
import { GetFeeds } from "../Api/Dashboard";

export default function Dashboard(props) {
  const [flag, setFlag] = useState(false);
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await GetFeeds();
      if (response) {
        setFlag(true);
      }
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
      <Header navigation={props.navigation} />

      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {flag ? (
            <FlatList
              data={taskItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <View style={styles.imgBox}>
              <Image style={styles.img} source={require("../../assets/loader.gif")} />
              <Text style={styles.loadingText}> Loading feeds... </Text>
            </View>
          )}
        </View>
      </View>
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
  imgBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 60,
    height: 60,
  },
  loadingText: {
    fontSize: 16,
    color: "#000",
  }
});
