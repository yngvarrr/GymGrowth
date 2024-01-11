import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "../../../components/firebase/index";
import Button from "../../../components/Button";
import { AntDesign } from "@expo/vector-icons";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export const AddWorkout = () => {
  const [treino, setTreino] = useState("");
  const [carga, setCarga] = useState("");
  const [grupo, setGrupo] = useState("");
  const [tipo, setTipo] = useState("");

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Sucesso",
      text2: "Seu exercício foi adicionado! 👋",
      autoHide: true,
      visibilityTime: 2500,
      position: 'bottom',
    });
  };

  const addTreino = async () => {
    try {
      const docRef = await addDoc(collection(db, "treinos"), {
        nome: treino,
        tipo: tipo,
        grupo: grupo,
        carga: carga,
      });
      console.log("Document written with ID: ", docRef.id);
      setTreino("");
      setCarga("");
      setGrupo("");
      setTipo("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = () => {
    addTreino();
    showToast();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="pluscircle" size={24} color="black" />
        <Text style={styles.head}>Adicionar novo exercício</Text>
      </View>
      <View style={styles.inputsGrid}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHead}>Nome do exercício:</Text>
          <TextInput
            placeholder="Qual o nome?"
            style={styles.input}
            value={treino}
            onChangeText={(text) => setTreino(text)}
            onSubmitEditing={addTreino}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHead}>Grupo muscular:</Text>
          <TextInput
            placeholder="Qual músculo trabalha?"
            style={styles.input}
            value={grupo}
            onChangeText={(text) => setGrupo(text)}
            onSubmitEditing={addTreino}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHead}>Membros:</Text>
          <TextInput
            placeholder="Superiores ou inferiores?"
            style={styles.input}
            value={tipo}
            onChangeText={(text) => setTipo(text)}
            onSubmitEditing={addTreino}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHead}>Carga atual (kg):</Text>
          <TextInput
            placeholder="Quantos kg pega?"
            style={styles.input}
            value={carga}
            onChangeText={(text) => setCarga(text)}
            onSubmitEditing={addTreino}
            keyboardType="numeric"
          />
        </View>
        <Button label="Adicionar exercício" onPress={handleSubmit} />
        <Toast/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 15,
    width: 170,
  },
  head: {
    fontSize: 22,
    fontWeight: "bold",
  },
  container: {
    marginTop: 40,
    flex: 1,
    width: "100%",
    height: '100%'
  },
  inputContainer: {
    alignItems: "center",
    maxWidth: 150,
  },
  inputsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 20,
  },
  inputHead: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
});
