import React, { useState, useRef } from "react";
import { Text, View, Button } from "react-native";
import ProfileQuestions from "../ProfileQuestions/Index";

function CompleteProfile() {
  const [questions, setQuestion] = useState([
    {
      subHeading: "Add Your",
      mainHeading: "Full Name",
      tagLine: "How should we identify you?",
      type: "default",
    },
    {
      subHeading: "Pick Your",
      mainHeading: "Username",
      tagLine: "How other members will find you?",
      type: "default",
    },
    {
      subHeading: "Select Your",
      mainHeading: "Profile Pciture",
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
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        ) : (
          <View>
            <Text>Complete</Text>
            {setCurrentQuestion(0)}
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