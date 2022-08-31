import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import DetailsScreen from '../screens/LoginScreen'
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';

export default function AboutTab() {
  const AboutStack = createStackNavigator();
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About Us" component={AboutScreen} options={{
        headerTitle: () => <Header title={"About Us"} />
      }} />
      <AboutStack.Screen name="Details" component={DetailsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <AboutStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </AboutStack.Navigator>
  )
}
