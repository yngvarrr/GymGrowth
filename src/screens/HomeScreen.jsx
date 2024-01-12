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
  const [workoutList, setWorkoutList] = useState([]);

  const getWorkouts = async () => {
    const querySnapshot = await getDocs(collection(db, "treinos"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      setWorkoutList({
        ...doc.data(),
        id: doc.id,
      })
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
      <WorkoutItem />
      <FlatList data={workoutList} renderItem={({item}) => console.log(item.data)} keyExtractor={(item) => item.id} />
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
