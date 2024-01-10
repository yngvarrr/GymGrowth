import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from "../../../components/Button";
import { CargaModal } from "../../../components/CargaModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MuscScreen = ({ navigation }) => {
  const findWorkout = async () => {
    const result = await AsyncStorage.getItem("workout");
    console.log(result);
  };

  const findWeight = async () => {
    const result = await AsyncStorage.getItem("weight");
    console.log(result);
  };

  useEffect(() => {
    findWorkout();
    findWeight();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Musculação</Text>
      <View>
        <Text>Meus Treinos</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          label="Superiores"
          onPress={() => navigation.navigate("Superiores")}
        />
        <Button label="Inferiores" />
      </View>
      <Button label="Novo Treino" />
      <CargaModal />
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
