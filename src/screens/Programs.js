import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import DashboardUser from "../components/DashboardUser";
import Header from "../components/Header";
import { GetFeeds } from "../Api/Dashboard";
import { Icon } from "@rneui/themed";

export default function Programs(props) {
  // console.log("Program Data: ", props);
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
  // console.log("WOrkOut: ", workouts);
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

  const programItem = ({ item }) => {
    return (
      <View style={styles.objectiveItem}>
        <View>
          <Icon
            name="dot-fill"
            type="octicon"
            color="#000 "
            style={{
              padding: 5,
              marginHorizontal: 10,
            }}
          />
        </View>
        <View>
          <Text>{item}</Text>
        </View>
      </View>
    );
  };
  const workOutItem = ({ item }) => {
    let bgWorkoutImgSrc = { uri: item.workoutBgImg };
    return (
      <TouchableWithoutFeedback>
        <ImageBackground
          style={{
            padding: 40,
            textAlign: "center",
            position: "relative",
          }}
          source={bgWorkoutImgSrc}
          resizeMode="cover"
        >
          <Image
            source={require("../../assets/images/overlayImage.png")}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              opacity: 0.5,
              height: "200%",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Week {item.week} / Day {item.day}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 24,
              fontWeight: "600",
            }}
          >
            {item.type}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            {item.exercise}
          </Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  };
  let imgSrc = { uri: bgImg };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={{
          paddingVertical: 90,
          paddingHorizontal: 30,
          textAlign: "center",
        }}
        source={imgSrc}
        resizeMode="cover"
      >
        <Text style={styles.programItemHeading}>{title}</Text>
        <View style={styles.countBox}>
          <View style={styles.countBox}>
            <View>
              <Icon
                name="eye"
                type="entypo"
                color="#fff"
                style={{
                  padding: 5,
                }}
              />
            </View>
            <View>
              <Text style={{ color: "#fff" }}>{viewCount}</Text>
            </View>
          </View>
          <View style={styles.countBox}>
            <View>
              <Icon
                name="reader-outline"
                type="ionicon"
                color="#fff"
                style={{
                  padding: 5,
                }}
              />
            </View>
            <View>
              <Text style={{ color: "#fff" }}>{readerCount}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          marginVertical: 30,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => console.log("Start Program")}
          style={styles.btn}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Start Program</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.objectivesContainer}>
        <View style={styles.objectivesHeaderBox}>
          <Text style={styles.objectivesHeading}>OBJECTIVES: </Text>
        </View>
        <View style={styles.objectivesItemBox}>
          <FlatList
            data={objectives}
            renderItem={programItem}
            keyExtractor={(item) => item.id}
            style={{
              width: "100%",
            }}
          />
        </View>
      </View>
      <View style={styles.objectivesContainer}>
        <View style={styles.objectivesHeaderBox}>
          <Text style={styles.objectivesHeading}>OVERVIEW: </Text>
        </View>
        <View style={styles.overviewItemBox}>
          <View style={styles.overviewItem}>
            <View style={styles.overviewItemHeadingBox}>
              <Text style={styles.overviewItemHeading}>Duration:</Text>
            </View>
            <View style={styles.overviewItemValueBox}>
              {duration ? (
                <Text style={styles.overviewItemValue}>{duration}</Text>
              ) : (
                <Text style={styles.overviewItemValue}>"N/A"</Text>
              )}
            </View>
          </View>
          <View style={styles.overviewItem}>
            <View style={styles.overviewItemHeadingBox}>
              <Text style={styles.overviewItemHeading}>Schedule:</Text>
            </View>
            <View style={styles.overviewItemValueBox}>
              {schedule ? (
                <Text style={styles.overviewItemValue}>{schedule}</Text>
              ) : (
                <Text style={styles.overviewItemValue}>"N/A"</Text>
              )}
            </View>
          </View>
          <View style={styles.overviewItem}>
            <View style={styles.overviewItemHeadingBox}>
              <Text style={styles.overviewItemHeading}>Nutrition:</Text>
            </View>
            <View style={styles.overviewItemValueBox}>
              {nutrition ? (
                <Text style={styles.overviewItemValue}>{nutrition}</Text>
              ) : (
                <Text style={styles.overviewItemValue}>"N/A"</Text>
              )}
            </View>
          </View>
          <View style={styles.overviewItem}>
            <View style={styles.overviewItemHeadingBox}>
              <Text style={styles.overviewItemHeading}>Intensity:</Text>
            </View>
            <View style={styles.overviewItemValueBox}>
              {intensity ? (
                <Text style={styles.overviewItemValue}>{intensity}</Text>
              ) : (
                <Text style={styles.overviewItemValue}>"N/A"</Text>
              )}
            </View>
          </View>
          <View style={styles.overviewItem}>
            <View style={styles.overviewItemHeadingBox}>
              <Text style={styles.overviewItemHeading}>Prerequisites:</Text>
            </View>
            <View style={styles.overviewItemValueBox}>
              {prerequisites ? (
                <Text style={styles.overviewItemValue}>{prerequisites}</Text>
              ) : (
                <Text style={styles.overviewItemValue}>"N/A"</Text>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.objectivesContainer}>
        <View style={styles.objectivesHeaderBox}>
          <Text style={styles.objectivesHeading}>NAVIGATE: </Text>
        </View>
        <View style={{ width: "90%" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              color: "#515151",
              marginVertical: 10,
            }}
          >
            {previewText}
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <FlatList
            data={workouts}
            renderItem={workOutItem}
            keyExtractor={(item) => item.id}
            style={{
              width: "100%",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    alignContent: "center",
    padding: 0,
  },
  programItemHeading: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
  },
  countBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
  },
  btn: {
    color: "#fff",
    width: "75%",
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 12,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#a854fd",
  },
  objectivesContainer: {
    // justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  objectivesHeaderBox: {
    backgroundColor: "#e5e5e5",
    width: "100%",
    alignItems: "center",
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 7,
    marginBottom: 15,
  },
  objectivesHeading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#515151",
  },
  objectivesItemBox: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  objectiveItem: {
    width: "100%",
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 3,
  },
  overviewItemBox: {
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 3,
    padding: 20,
  },
  overviewItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  overviewItemValueBox: {
    width: "50%",
    alignItems: "flex-end",
  },
  overviewItemHeading: { fontWeight: "600", fontSize: 17 },
  overviewItemValue: { fontWeight: "300", fontSize: 16 },
  overviewItemHeadingBox: {
    width: "50%",
  },
});
