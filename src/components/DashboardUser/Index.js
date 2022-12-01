import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "@rneui/themed";
import LikeModal from "../LikeModal/Index";

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
        <View style={styles.imgBox}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/logoSmall.jpg")}
          />
        </View>
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
        {/* <Icon
          name={likeIcon}
          type="font-awesome"
          color="#f50"
          onPress={() => {
            if (like) {
              setLikeIcon("heart-o");
              setLike(false);
            } else {
              setLike(true);
              setLikeIcon("heart");
            }
          }}
        /> */}
        <LikeModal />
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 7,
  },
  itemLeft: {
    alignItems: "center",
    flex: 1,
  },
  imgBox: {
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 1,
    // shadowRadius: 0,
    elevation: 7,
  },
  img: {
    width: 70,
    height: 70,
    borderColor: "#000",
    borderWidth: 5,
    borderRadius: 50,
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
