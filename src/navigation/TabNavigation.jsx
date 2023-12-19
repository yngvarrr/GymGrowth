import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { FolderScreen } from "../screens/FolderScreen";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Central de Treinos" component={FolderScreen} />
    </Tab.Navigator>
  );
};
