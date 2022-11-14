import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BusPassScreen from '../screens/OutpassScreen/BusPassScreen';
import OutpassScreen from '../screens/OutpassScreen/OutpassScreen';
import GeneratedOutpassScreen from '../screens/OutpassScreen/GeneratedOutpassScreen';
import PreviousOutpassScreen from '../screens/OutpassScreen/PreviousOutpassScreen';
import Header from '../components/Header';
import { SettingsScreen } from '../screens/SettingsScreen';
import { DevelopersScreen } from '../screens/DevelopersScreen';
import { OpenSourceLibScreen } from '../screens/OpenSourceLibScreen';

function MaterialPassTab() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName='outpass'
    >
      <Tab.Screen name="outpass" component={OutpassScreen} 
        options={{
          title:'Outpass',
        }}
        
      />
      <Tab.Screen name="buspass" component={BusPassScreen}  
        options={{
          title:'Bus Pass'
        }}
      />
    </Tab.Navigator>
  );
}

export default function PassTab({ navigation }) {
  const OutpassStack = createStackNavigator();
  return (
    <OutpassStack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}
    >
      <OutpassStack.Screen name="Passes" component={MaterialPassTab} options={{
        headerTitle: () => <Header title={"Passes"} />
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


