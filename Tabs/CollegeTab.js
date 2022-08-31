import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CollegeScreen from '../screens/CollegeScreen/CollegeScreen';
import DetailsScreen from '../screens/LoginScreen'
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';

export default function CollegeTab() {
  const CollegeStack = createStackNavigator();
  return (
    <CollegeStack.Navigator>
      <CollegeStack.Screen name="College Administration" component={CollegeScreen} options={{
        headerTitle: () => <Header title={"College Administration"}/>
      }} />
      <CollegeStack.Screen name="Details" component={DetailsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </CollegeStack.Navigator>
  )
}
