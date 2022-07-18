import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import DetailsScreen from '../screens/DetailsScreen'

export default function AboutTab() {
  const AboutStack = createStackNavigator();
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About Us" component={AboutScreen} options={{
        headerTitleAlign: 'center',
      }}
      />
      <AboutStack.Screen name="Details" component={DetailsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </AboutStack.Navigator>
  )
}
