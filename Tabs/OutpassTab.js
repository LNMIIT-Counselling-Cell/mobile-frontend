import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OutpassScreen from '../screens/OutpassScreen/OutpassScreen';
import DetailsScreen from '../screens/DetailsScreen'

export default function OutpassTab() {
  const OutpassStack = createStackNavigator();
  return (
    <OutpassStack.Navigator>
      <OutpassStack.Screen name="Outpass Management" component={OutpassScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <OutpassStack.Screen name="Details" component={DetailsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </OutpassStack.Navigator>
  )
}
