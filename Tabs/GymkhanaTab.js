import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GymkhanaScreen from '../screens/GymkhanaScreen/GymkhanaScreen';
import DetailsScreen from '../screens/DetailsScreen'

export default function GymkhanaTab() {
  const GymkhanaStack = createStackNavigator();
  return (
    <GymkhanaStack.Navigator>
      <GymkhanaStack.Screen name="Student's Gymkhana" component={GymkhanaScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Details" component={DetailsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </GymkhanaStack.Navigator>
  )
}
