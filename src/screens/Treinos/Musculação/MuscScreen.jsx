import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from '../../../components/Button';
import { CargaModal } from '../../../components/CargaModal';

export const MuscScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
        <Text>
          Musculação
        </Text>
        <View style={styles.buttons}>
          <Button label="Superiores" onPress={() => navigation.navigate("Superiores")}/>
          <Button label="Inferiores" />
        </View>
        <CargaModal />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})