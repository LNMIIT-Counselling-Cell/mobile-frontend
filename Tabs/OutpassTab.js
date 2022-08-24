import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OutpassScreen from '../screens/OutpassScreen/OutpassScreen';
import GeneratedOutpassScreen from '../screens/OutpassScreen/GeneratedOutpassScreen';
import PreviousOutpassScreen from '../screens/OutpassScreen/PreviousOutpassScreen';

export default function OutpassTab() {
  const OutpassStack = createStackNavigator();
  return (
    <OutpassStack.Navigator>
      <OutpassStack.Screen name="Outpass" component={OutpassScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <OutpassStack.Screen name="Generated Outpass" component={GeneratedOutpassScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <OutpassStack.Screen name="Previous Outpass" component={PreviousOutpassScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </OutpassStack.Navigator>
  )
}
