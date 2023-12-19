import React, { useState } from "react";
import Modal from "react-native-modal";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "./Button";
import { FormCarga } from "./FormCarga";

export const CargaModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };
  
  return (
    <View>
      <Button label="Abrir Formulário" onPress={abrirModal} />
      <Modal isVisible={modalVisible} onBackdropPress={fecharModal}>
        <View
          style={styles.modal}
        >
          <FormCarga fecharModal={fecharModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    modal: {
        width: "auto",
        alignItems: "center",
        marginHorizontal: 'auto',
        height: 250,
        backgroundColor: 'white',
        paddingVertical: 20
    }
})