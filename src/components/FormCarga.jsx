import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export const FormCarga = () => {
  const [nome, setNome] = useState("");
  const [carga, setCarga] = useState("");
  const [grupo, setGrupo] = useState("");
  const [registros, setRegistros] = useState([]);

  const handleRegistro = () => {
    // Verifica se ambos os campos estão preenchidos
    if (nome && carga && grupo) {
      // Cria um novo registro
      const novoRegistro = { nome, carga, grupo };

      // Atualiza o estado com o novo registro
      setRegistros((prevRegistros) => [...prevRegistros, novoRegistro]);

      // Limpa os campos do formulário
      setNome("");
      setCarga("");
      setGrupo("");
      fecharModal();
      // Pode adicionar lógica adicional, como salvar os registros em algum armazenamento persistente
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <View style={styles.modal}>
      <Text>Cadastrar Novo Exercício</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder="Grupo"
        value={grupo}
        onChangeText={(text) => setGrupo(text)}
      />
      <TextInput
        placeholder="Carga"
        value={carga}
        onChangeText={(text) => setCarga(text)}
        keyboardType="numeric"
      />
      <Button title="Cadastrar" onPress={handleRegistro} />
      {/* Mostra os registros existentes */}
      <Text>Registros:</Text>
      {registros.map((registro, index) => (
        <Text
          key={index}
        >{`${registro.nome} - ${registro.email} - ${registro.grupo}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
