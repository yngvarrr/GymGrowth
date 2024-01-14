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
import Toast from "react-native-toast-message";
import Checkbox from "expo-checkbox";
import { SelectList } from "react-native-dropdown-select-list";
import DropDownPicker from "react-native-dropdown-picker";

export const AddWorkout = () => {
  const [selected, setSelected] = React.useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [treino, setTreino] = useState("");
  const [carga, setCarga] = useState("");
  const [grupo, setGrupo] = useState("");
  const [tipo, setTipo] = useState("");
  const [falha, setFalha] = useState(false);
  const [inferiores, setInferiores] = useState(false);
  const [superiores, setSuperiores] = useState(false);
  const [biceps, setBiceps] = useState(false);
  const [antebraco, setAntebraco] = useState(false);
  const [peito, setPeito] = useState(false);
  const [triceps, setTriceps] = useState(false);
  const [ombros, setOmbros] = useState(false);
  const [costas, setCostas] = useState(false);
  const [quad, setQuad] = useState(false);
  const [posterior, setPoserior] = useState(false);
  const [pant, setPant] = useState(false);
  const [gluteo, setGluteeo] = useState(false);

  const [grupos, setGrupos] = useState([
    { label: "Bíceps", value: "Bíceps" },
    { label: "Tríceps", value: "Tríceps" },
    { label: "Peito", value: "Peito" },
    { label: "Ombros", value: "Ombros" },
    { label: "Costas", value: "Costas" },
    { label: "Antebraço", value: "Antebraço" },
    { label: "Quadríceps", value: "Quadríceps" },
    { label: "Panturrilha", value: "Panturrilha" },
    { label: "Posterior", value: "Posterior" },
    { label: "Glúteo", value: "Glúteo" },
  ]);

  const data = [
    { key: "1", value: "Bíceps" },
    { key: "2", value: "Tríceps" },
    { key: "3", value: "Peito" },
    { key: "4", value: "Ombros" },
    { key: "5", value: "Costas" },
    { key: "6", value: "Antebraço" },
    { key: "7", value: "Quadríceps" },
    { key: "8", value: "Panturrilha" },
    { key: "9", value: "Posterior" },
    { key: "10", value: "Glúteo" },
  ];

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Sucesso",
      text2: "Seu exercício foi adicionado! 👋",
      autoHide: true,
      visibilityTime: 2500,
      position: "bottom",
    });
  };

  const addTreino = async () => {
    try {
      const docRef = await addDoc(collection(db, "treinos"), {
        nome: treino,
        tipo: tipo,
        grupo: grupo,
        carga: carga,
        falha: falha,
      });
      console.log("Document written with ID: ", docRef.id);
      setTreino("");
      setCarga("");
      setGrupo("");
      setTipo("");
      setFalha();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = () => {
    addTreino();
    showToast();
  };

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
          <Text style={styles.inputHead}>Carga atual (kg):</Text>
          <TextInput
            placeholder="Quantos kg pega?"
            style={styles.input}
            value={carga}
            onChangeText={(text) => setCarga(text + " kg")}
            onSubmitEditing={addTreino}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHead}>Grupo muscular:</Text>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
          />
          {/*<TextInput
            placeholder="Qual músculo trabalha?"
            style={styles.input}
            value={grupo}
            onChangeText={(text) => setGrupo(text)}
            onSubmitEditing={addTreino}
  /> */}
        </View>
        <View style={styles.membrosContainer}>
          <Text style={styles.inputHead}>Membros:</Text>
          <View style={styles.checksContainer}>
            <Checkbox value={inferiores} onValueChange={setInferiores} />
            <Text style={styles.membrosText}>Inferiores</Text>
          </View>
          <View style={styles.checksContainer}>
            <Checkbox value={superiores} onValueChange={setSuperiores} />
            <Text style={styles.membrosText}>Superiores</Text>
          </View>

          {/*<TextInput
            placeholder="Superiores ou inferiores?"
            style={styles.input}
            value={tipo}
            onChangeText={(text) => setTipo(text)}
            onSubmitEditing={addTreino}
/> */}
        </View>
        <View style={styles.confirmContainer}>
          <View style={styles.checkboxContainer}>
            <Checkbox value={falha} onValueChange={setFalha} />
            <Text style={styles.checkText}>Até a falha?</Text>
          </View>
          <Button label="Adicionar exercício" onPress={handleSubmit} />
          <DropDownPicker
            open={open}
            value={value}
            items={grupos}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setGrupos}
          />
        </View>
        <Toast />
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
    width: 200,
  },
  head: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    marginTop: 40,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    alignItems: "center",
  },
  inputsGrid: {
    alignItems: "center",
    justifyContent: "space-around",
    margin: 20,
  },
  inputHead: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  checkText: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 5,
  },
  checksContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  membrosText: {
    marginLeft: 5,
    fontWeight: "500",
    fontSize: 16,
  },
});
