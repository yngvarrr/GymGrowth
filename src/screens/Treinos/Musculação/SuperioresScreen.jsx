import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from '../../../components/Button';

export const SuperioresScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.head}>Superiores</Text>
        </View>
        <View>
            <Text>Selecione o grupo:</Text>
            <View>
                <Button label="Peito" />
                <Button label="Costas" />
                <Button label="Bíceps" />
                <Button label="Triceps" />
                <Button label="Ombro" />
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        width: "auto",
        height: 40,
        backgroundColor: "red",
        alignItems: "center",
    },  
    container:  {
        marginTop: 40
    },  
    head: {
        fontSize: 22,
        fontWeight: "bold"
    },
})