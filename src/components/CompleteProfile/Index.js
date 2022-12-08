import React, { useState, useRef } from "react";
import { Text, View, Button } from "react-native";
import ProfileQuestions from "../ProfileQuestions";

function CompleteProfile(props) {
  const [questions, setQuestion] = useState([
    {
      subHeading: "Add Your",
      mainHeading: "Full Name",
      tagLine: "How should we identify you?",
      type: "fullName",
    },
    {
      subHeading: "Pick Your",
      mainHeading: "Username",
      tagLine: "How other members will find you?",
      type: "userName",
    },
    {
      subHeading: "Select Your",
      mainHeading: "Profile Picture",
      tagLine: "How should we identify you?",
      type: "upload",
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const iptGroup = useRef();
  // Clear radio button selection befor new question
  const clearChk = () => {
    const chk = iptGroup.current.querySelectorAll("input");
    chk.forEach((item) => (item.checked = false));
  };

  return (
    <View>
      <View>
        {currentQuestion < questions.length ? (
          <ProfileQuestions
            item={questions[currentQuestion]}
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            navigation={props.navigation}
          />
        ) : (
          <View>
            <Text>Complete</Text>
            {/* {setCurrentQuestion(0)} */}
          </View>
        )}
        {/* {item.options.map((option, ind) => {
          return <View></View>;
        })} */}
      </View>
    </View>
  );
}

export default CompleteProfile;
