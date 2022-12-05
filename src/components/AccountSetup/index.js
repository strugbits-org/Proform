import React, { useState, useRef } from "react";
import { Text, View, Button } from "react-native";
import AccountSetupQuestions from "../AccountSetupQuestions";

function AccountSetup() {
  const [questions, setQuestion] = useState([
    {
      subHeading: "",
      mainHeading: "Account Setup",
      tagLine:
        "The following tasks will help you quickly set up your account so that you can begin your first workout!",
      flowText: 'Click "Begin" to go to the first task.',
      type: "beginBtn",
    },
    {
      subHeading: "",
      mainHeading: "",
      tagLine: "First, let's build your profile: ",
      flowText: "",
      type: "startProfile",
    },
    {
      subHeading: "Tell us you",
      mainHeading: "GENDER",
      tagLine:
        "Help us customize your user experience by telling us your gender.",
      flowText: "",
      type: "gender",
    },
    {
      subHeading: "Tell us you",
      mainHeading: "BIRTHDAY",
      tagLine:
        "Help us customize your user experience by telling us your D.O.B.",
      flowText: "",
      type: "dob",
    },
    {
      subHeading: "Tell us you",
      mainHeading: "ACTIVITY LEVEL",
      tagLine:
        "Help us customize your user experience by telling us your current activity level.",
      flowText: "",
      type: "activityLevel",
    },
    {
      subHeading: "Tell us you",
      mainHeading: "WEIGHT GOALS",
      tagLine:
        "Help us customize your user experience by telling us your weight goals.",
      flowText: "",
      type: "weightGoals",
    },
    {
      subHeading: "",
      mainHeading: "",
      tagLine: "",
      flowText: "",
      type: "customize",
    },
    {
      subHeading: "Access your",
      mainHeading: "TIME ZONE",
      tagLine:
        "Help us customize your user experience by sharing your time zone.",
      flowText: "",
      type: "timeZone",
    },
    {
      subHeading: "Select Your",
      mainHeading: "Profile Pciture",
      tagLine: "How should we identify you?",
      flowText: "",
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
          <AccountSetupQuestions
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

export default AccountSetup;
