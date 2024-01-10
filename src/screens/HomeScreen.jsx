import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "./../components/firebase/index";
import { WorkoutItem } from "../components/WorkoutItem";

export const HomeScreen = () => {
  const [greet, setGreet] = useState("Olá");
  const [treino, setTreino] = useState("");
  const [carga, setCarga] = useState("");
  const [grupo, setGrupo] = useState("");
  const [tipo, setTipo] = useState("");
  const [workoutList, setWorkoutList] = useState([]);

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

  const getWorkouts = async () => {
    const querySnapshot = await getDocs(collection(db, "treinos"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      setWorkoutList({
        ...doc.data(),
        id: doc.id,
      });
    });
  };

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet("Bom dia");
    if (hrs === 1 || hrs < 18) return setGreet("Boa tarde");
    setGreet("Boa noite");
  };

  useEffect(() => {
    findGreet();
    getWorkouts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.head}>{`${greet} Usuário! `}</Text>
      </View>
      <FlatList
        data={workoutList}
        renderItem={({ item }) => <WorkoutItem nome={item.nome} />}
        keyExtractor={(item) => item.id}
      />
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
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  head: {
    fontSize: 20,
    fontWeight: "400",
    padding: 10,
  },
  addBtn: {
    position: "absolute",
    left: 180,
    bottom: 15,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  input: {
    borderColor: "black",
    width: 400,
    alignItems: "center",
    padding: 15,
    backgroundColor: "yellow",
    marginVertical: 10,
  },
});
