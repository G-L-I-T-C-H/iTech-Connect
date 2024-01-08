import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import Classroom from '../bottomTabScreens/Classroom';
import Home from '../bottomTabScreens/Home';
import Peer from '../bottomTabScreens/Peer';
//import Connections from '../bottom tab screens/Connections';

function HomeScreen() {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator screenOptions={{headerShown:false}}>
      <BottomTab.Screen
        name="Feed"
        options={{ tabBarIcon: ({ color, size }) => { return <Ionicons name={'home'} size={size} color={color} /> } }}
        component={Home}
      />
      <BottomTab.Screen
        name="Connections"
        options={{ tabBarIcon: ({ color, size }) => { return <Ionicons name={'person'} size={size} color={color} /> } }}
        component={Peer}
      />
      <BottomTab.Screen
        name="Classroom"
        options={{ tabBarIcon: ({ color, size }) => { return <Ionicons name={'school'} size={size} color={color} /> } }}
        component={Classroom}
      />
    </BottomTab.Navigator>
  );
}

export default HomeScreen;
