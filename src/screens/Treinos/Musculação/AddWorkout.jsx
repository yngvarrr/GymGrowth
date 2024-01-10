import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";

export const AddWorkout = () => {

  const [treino, setTreino] = useState("");
  const [carga, setCarga] = useState("");
  const [grupo, setGrupo] = useState("");
  const [tipo, setTipo] = useState("");

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

  return (<SafeAreaView style={styles.container}>
    <Text style={styles.head}>Adicionar novo exercício</Text>
    <View>
        <TextInput
          style={styles.input}
          value={treino}
          onChangeText={(text) => setTreino(text)}
          onSubmitEditing={addTreino}
        />
        <TextInput
          style={styles.input}
          value={grupo}
          onChangeText={(text) => setGrupo(text)}
          onSubmitEditing={addTreino}
        />
        <TextInput
          style={styles.input}
          value={tipo}
          onChangeText={(text) => setTipo(text)}
          onSubmitEditing={addTreino}
        />
        <TextInput
          style={styles.input}
          value={carga}
          onChangeText={(text) => setCarga(text)}
          onSubmitEditing={addTreino}
          keyboardType="numeric"
        />
      </View>
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    width: 400,
    alignItems: "center",
    padding: 15,
    backgroundColor: "yellow",
    marginVertical: 10,
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    marginTop: 40
  },
});
