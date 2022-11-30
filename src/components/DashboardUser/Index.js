import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "@rneui/themed";

const DashboardUser = (props) => {
  const {
    userName,
    userImage,
    taskStatus,
    workoutTitle,
    programName,
    week,
    day,
    webDynamicURL,
  } = props.userInfo;

  const [likeIcon, setLikeIcon] = useState("heart-o");
  const [like, setLike] = useState(false);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/logoSmall.jpg")}
        />
        {/* <Image source={require(userImage)} /> */}
        <Text style={styles.imageText}>@{userName}</Text>
      </View>
      <View style={styles.itemCenter}>
        <Text style={styles.itemText}>{taskStatus}</Text>
        <Text style={[styles.itemText, styles.workoutTitleText]}>
          {workoutTitle}
        </Text>
        <Text style={styles.itemText}>{programName}</Text>
        <Text style={styles.itemText}>
          Week {week} / Day {day}
        </Text>
        <TouchableOpacity
        //   onPress={() => completeTask(index)}
        >
          <Text style={[styles.itemText, styles.ViewMoreText]}>
            View Workout
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemRight}>
        {/* <TouchableOpacity
        //   onPress={() => completeTask(index)}
        > */}
        <Icon
          name={likeIcon}
          type="font-awesome"
          color="#f50"
          onPress={() => (like ? (likeIcon = "heart") : (likeIcon = "heart-o"))}
        />
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  itemLeft: {
    alignItems: "center",
    flex: 1,
  },
  img: {
    width: 70,
    height: 70,
    borderColor: "#000",
    borderWidth: 5,
    borderRadius: 50,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#52006A",
    elevation: 20,
  },
  itemCenter: {
    // alignItems: "center",
    padding: 10,
    flex: 2,
  },
  imageText: {
    marginTop: 5,
  },
  itemText: {
    fontWeight: "bold",
  },
  workoutTitleText: {
    color: "#515151",
  },
  ViewMoreText: {
    color: "#515151",
    textDecorationLine: "underline",
  },
  itemRight: {
    flex: 0.5,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DashboardUser;
