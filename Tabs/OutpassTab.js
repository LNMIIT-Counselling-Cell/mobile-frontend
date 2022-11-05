import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OutpassScreen from '../screens/OutpassScreen/OutpassScreen';
import GeneratedOutpassScreen from '../screens/OutpassScreen/GeneratedOutpassScreen';
import PreviousOutpassScreen from '../screens/OutpassScreen/PreviousOutpassScreen';
import Header from '../components/Header';
import { SettingsScreen } from '../screens/SettingsScreen';
import { DevelopersScreen } from '../screens/DevelopersScreen';
import { OpenSourceLibScreen } from '../screens/OpenSourceLibScreen';

export default function OutpassTab({ navigation }) {
  const OutpassStack = createStackNavigator();
  return (
    <OutpassStack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}
    >
      <OutpassStack.Screen name="Outpass" component={OutpassScreen} options={{
        headerTitle: () => <Header title={"Outpass"} />
      }} />
      <OutpassStack.Screen name="Generated Outpass" component={GeneratedOutpassScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <OutpassStack.Screen name="Previous Outpass" component={PreviousOutpassScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <OutpassStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <OutpassStack.Screen name="Meet our Developers" component={DevelopersScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <OutpassStack.Screen name="Open Source Libraries" component={OpenSourceLibScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </OutpassStack.Navigator>
  )
}
