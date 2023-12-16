import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { FolderScreen } from './src/screens/FolderScreen';
import { MuscScreen } from './src/screens/Treinos/MuscScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="GymGrowth" component={HomeScreen} />
        <Tab.Screen name="Central de Treinos" component={FolderScreen} />
      </Tab.Navigator>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Musculação" component={MuscScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
