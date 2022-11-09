import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GymkhanaScreen from '../screens/GymkhanaScreen/GymkhanaScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';
import CulturalCouncilScreen from '../screens/GymkhanaScreen/CulturalCouncilScreen';
import ScitechCouncilScreen from '../screens/GymkhanaScreen/ScitechCouncilScreen';
import SportsCouncilScreen from '../screens/GymkhanaScreen/SportsCouncilScreen';
import CoshaCommitteeScreen from '../screens/GymkhanaScreen/CoshaCommitteeScreen';
import { DevelopersScreen } from '../screens/DevelopersScreen';
import { OpenSourceLibScreen } from '../screens/OpenSourceLibScreen';
import { ClubFestScreen } from '../screens/GymkhanaScreen/ClubFestScreen';

export default function GymkhanaTab() {
  const GymkhanaStack = createStackNavigator();
  return (
    <GymkhanaStack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}
    >
      <GymkhanaStack.Screen name="Students' Gymkhana" component={GymkhanaScreen} options={{
        headerTitle: () => <Header title={"Student's Gymkhana"} />
      }} />
      <GymkhanaStack.Screen name="Club Fest" component={ClubFestScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Meet our Developers" component={DevelopersScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Cultural Council" component={CulturalCouncilScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Science & Technology Council" component={ScitechCouncilScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Sports Council" component={SportsCouncilScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="COSHA Committee" component={CoshaCommitteeScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Open Source Libraries" component={OpenSourceLibScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </GymkhanaStack.Navigator>
  )
}
