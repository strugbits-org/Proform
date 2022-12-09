import React, { useState, useContext } from "react";
import { View } from "react-native";
import AccountSetupQuestions from "../AccountSetupQuestions";
import { questions } from "./Questions";
import { AuthContext } from "../../context/AuthContext";

function AccountSetup(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { userAccountData } = useContext(AuthContext);

  // useEffect

  return (
    <View>
      <View>
        {currentQuestion < questions.length && (
          <AccountSetupQuestions
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

export default AccountSetup;
