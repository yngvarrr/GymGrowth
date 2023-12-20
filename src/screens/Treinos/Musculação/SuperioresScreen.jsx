import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import Button from "../../../components/Button";
import SuperioresDropdown from "./SuperioresDropdown";

export const SuperioresScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.head}>Superiores</Text>
      </View>
      <View>
        <SuperioresDropdown />
      </View>
      <View style={styles.inputs}> 
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do exercício"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a carga do exercício"
          keyboardType="numeric"
        />
        <Button label="Adicionar exercício" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "auto",
    height: 40,
    backgroundColor: "gold",
    alignItems: "center",
  },
  container: {
    marginTop: 40,
  },
  head: {
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  inputs: {
    width: 350,
    marginHorizontal: 20,
  },
});
