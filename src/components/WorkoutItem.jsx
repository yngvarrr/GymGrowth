import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TextInput,
    FlatList
  } from "react-native";

export const WorkoutItem = (props) => {
  return (  
    <View style={styles.container}>
        <Text>{props.nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    },
})