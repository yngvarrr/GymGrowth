import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from "../../../components/Button";

export const MuscScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Musculação</Text>
      <View>
        <Text>Meus Treinos</Text>
      </View>
      <Button label="Adicionar novo exercício" onPress={() => navigation.navigate("Adicionar Exercício")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
