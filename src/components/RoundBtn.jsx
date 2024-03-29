import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

export default function RoundBtn({ antIconName, size, color, style, onPress }) {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || colors.DARK}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.PRIMARY,
        padding: 15,
        borderRadius: 50,
        elevation: 5,
        width: 50,
        alignItems: 'center',
        marginHorizontal: 150
    }
});
