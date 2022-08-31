import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/LoginScreen'
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';

export default function HomeTab() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={HomeScreen} options={{
        headerTitle: () => <Header title={"Home"} />
      }} />
      <HomeStack.Screen name="Details" component={DetailsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </HomeStack.Navigator>
  )
}
