import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';
import { DevelopersScreen } from '../screens/DevelopersScreen';

export default function AboutTab() {
  const AboutStack = createStackNavigator();
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About Us" component={AboutScreen} options={{
        headerTitle: () => <Header title={"About Us"} />
      }} />
      <AboutStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <AboutStack.Screen name="Meet our Developers" component={DevelopersScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </AboutStack.Navigator>
  )
}
