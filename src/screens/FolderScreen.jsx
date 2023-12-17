import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from "../components/Button";

export const FolderScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Escolha o tipo de treino:</Text>
      <View style={styles.buttonContainer}>
        <Button label="Musculação" onPress={() => navigation.navigate("Musculação")} />
        <Button label="Calistenia" />
        <Button label="Crossfit" />
        <Button label="Cardio" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto'
  },
  head: {},
  buttonContainer: {
    alignItems: 'center',
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15
  },
});
