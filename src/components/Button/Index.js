import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        alignItems: "center",
        width: "80%",
        paddingVertical: 12,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 16 }}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}
