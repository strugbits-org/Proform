import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { Icon } from "@rneui/themed";
import LikeModal from "../LikeModal";

const DashboardUser = (props) => {
  const {
    userName,
    profilePic,
    taskStatus,
    workoutTitle,
    programName,
    week,
    day,
    webDynamicURL,
    programDetails,
  } = props.userInfo;
  const navigation = props.navigation;
  const likeCount = props.likeCount;

  const [likeIcon, setLikeIcon] = useState("heart-o");
  const [like, setLike] = useState(false);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.imgBox}>
          <Image
            style={styles.img}
            source={{
              uri: profilePic
                ? profilePic
                : "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
            }}
          />
        </View>
        <Text style={styles.imageText}>@{userName}</Text>
      </View>
      <View style={styles.itemCenter}>
        <Text style={styles.itemText}>completed</Text>
        <Text style={[styles.itemText, styles.workoutTitleText]}>
          {programDetails?.workoutTitle}
        </Text>
        <Text style={styles.itemText}>{programDetails?.progamName}</Text>
        <Text style={styles.itemText}>
          Week {week} / Day {day}
        </Text>
        <TouchableOpacity
        //   onPress={() => completeTask(index)}
        >
          <Text
            onPress={() =>
              Linking.openURL(
                programDetails.link
                  ? "https://www.proformapp.com/" + programDetails.link
                  : "https://www.proformapp.com/"
              )
            }
            style={[styles.itemText, styles.ViewMoreText]}
          >
            View Workout
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemRight}>
        <LikeModal navigation={navigation} />
        <Text>{likeCount ? likeCount : 0}</Text>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,

    shadowColor: "rgba(0,0,0,1)",
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
    elevation: 7,
  },
  img: {
    width: 70,
    height: 70,
    borderColor: "#fff",
    borderWidth: 5,
    borderRadius: 50,
  },
  itemCenter: {
    padding: 10,
    flex: 2,
  },
  imageText: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 13,
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
    flexDirection: "row",
  },
});

export default DashboardUser;
