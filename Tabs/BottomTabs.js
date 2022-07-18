import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CollegeTab from './CollegeTab';
import GymkhanaTab from './GymkhanaTab';
import HomeTab from './HomeTab';
import OutpassTab from './OutpassTab';
import AboutTab from './AboutTab';

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Tab.Screen name="College" component={CollegeTab} />
      <Tab.Screen name="Gymkhana" component={GymkhanaTab} />
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Outpass" component={OutpassTab} />
      <Tab.Screen name="About" component={AboutTab} />
    </Tab.Navigator>
  )
}
