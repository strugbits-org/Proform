import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({ bgColor, btnLabel, textColor, Press, btnWidth, disabled, marginTop }) {
  btnWidth ? (btnWidth = btnWidth) : (btnWidth = "80%");
  textColor ? (textColor = textColor) : (textColor = "#fff");
  return (
    <TouchableOpacity
      onPress={Press}
      disabled={disabled}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        alignItems: "center",
        width: btnWidth,
        paddingVertical: 12,
        marginVertical: 10,
        marginTop: marginTop ? marginTop : 0
      }}
    >
      <Text style={{ color: textColor, fontSize: 16 }}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}
