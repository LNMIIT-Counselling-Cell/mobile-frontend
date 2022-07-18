import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CollegeScreen from '../screens/CollegeScreen/CollegeScreen';
import DetailsScreen from '../screens/DetailsScreen'

export default function CollegeTab() {
  const CollegeStack = createStackNavigator();
  return (
    <CollegeStack.Navigator>
      <CollegeStack.Screen name="College Administration" component={CollegeScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Details" component={DetailsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </CollegeStack.Navigator>
  )
}
