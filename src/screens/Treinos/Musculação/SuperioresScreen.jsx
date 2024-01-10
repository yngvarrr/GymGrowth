import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import SuperioresDropdown from "./SuperioresDropdown";
import RoundBtn from "../../../components/RoundBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "./createClient";

export const SuperioresScreen = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  async function fetchUsers() {
    const { data } = supabase.from("users").select("*");
    setUsers(data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  const [treino, setTreino] = useState("");
  const [carga, setCarga] = useState("");

  const handleChange = (text) => setTreino(text);
  const handleChangeW = (text) => setCarga(text);

  const handleSubmitT = async () => {
    const workout = { exercicio: treino };
    await AsyncStorage.setItem("workout", JSON.stringify(workout));
  };

  const handleSubmitW = async () => {
    const weight = { carga: weight };
    await AsyncStorage.setItem("weight", JSON.stringify(weight));
  };

  const handleSubmit = () => {
    handleSubmitT();
    handleSubmitW();
  };

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
          value={treino}
          onChangeText={handleChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a carga do exercício"
          keyboardType="numeric"
          value={carga}
          onChangeText={handleChangeW}
        />
        <RoundBtn antIconName="arrowright" onPress={handleSubmit} />
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
