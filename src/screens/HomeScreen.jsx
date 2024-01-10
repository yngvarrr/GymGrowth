import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import RoundBtn from "../components/RoundBtn";

export const HomeScreen = () => {
  const [greet, setGreet] = useState("Olá");

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet("Bom dia");
    if (hrs === 1 || hrs < 18) return setGreet("Boa tarde");
    setGreet("Boa noite");
  };

  useEffect(() => {
    findGreet();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.head}>{`${greet} Usuário! `}</Text>
      </View>
      <RoundBtn antIconName="plus" style={styles.addBtn} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1
  },  
  head: {
    fontSize: 20,
    fontWeight: "400",
    padding: 10
  },
  addBtn: {
    position: "absolute",
    left: 180,
    bottom: 15
  },
});
