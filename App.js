import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { MuscScreen } from "./src/screens/Treinos/Musculação/MuscScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigation } from "./src/navigation/TabNavigation";
import { SuperioresScreen } from "./src/screens/Treinos/Musculação/SuperioresScreen";
import { ProfieScreen } from "./src/screens/ProfieScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GymGrowth" component={TabNavigation} />
        <Stack.Screen name="Musculação" component={MuscScreen} />
        <Stack.Screen name="Superiores" component={SuperioresScreen}/>
        <Stack.Screen name="Perfil" component={ProfieScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
