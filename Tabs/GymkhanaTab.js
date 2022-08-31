import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GymkhanaScreen from '../screens/GymkhanaScreen/GymkhanaScreen';
import DetailsScreen from '../screens/LoginScreen'
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';

export default function GymkhanaTab() {
  const GymkhanaStack = createStackNavigator();
  return (
    <GymkhanaStack.Navigator>
      <GymkhanaStack.Screen name="Student's Gymkhana" component={GymkhanaScreen} options={{
        headerTitle: () => <Header title={"Student's Gymkhana"} />
      }} />
      <GymkhanaStack.Screen name="Details" component={DetailsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </GymkhanaStack.Navigator>
  )
}
