import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from "../../../components/Button";
import { CargaModal } from "../../../components/CargaModal";

export const MuscScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Musculação</Text>
      <View>
        <Text>Meus Treinos</Text>
      </View>
      <Button label="Novo Treino" onPress={() => navigation.navigate("Adicionar Exercício")} />
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
