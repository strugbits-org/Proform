import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import ProfileQuestions from "../ProfileQuestions";
import { questions } from "./Questions";

function CompleteProfile(props) {

  const { userAccountData } = useContext(AuthContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if (userAccountData.fullNames && userAccountData.username) {
      setCurrentQuestion(2);
    } else if (userAccountData.fullNames) {
      setCurrentQuestion(1);
    } else {
      setCurrentQuestion(0);
    }
  }, [userAccountData])


  return (
    <View>
      <View>
        {currentQuestion < questions.length && (
          <ProfileQuestions
            item={questions[currentQuestion]}
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            navigation={props.navigation}
            data={userAccountData}
          />
        )}
      </View>
    </View>
  );
}

export default CompleteProfile;
