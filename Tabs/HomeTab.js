import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';
import { MenuScreen } from '../screens/HomeScreen/MenuScreen';
import { TimeTableScreen } from '../screens/HomeScreen/TimeTableScreen';
import { DevelopersScreen } from '../screens/DevelopersScreen';
import { OpenSourceLibScreen } from '../screens/OpenSourceLibScreen';
import { ExtraPDFScreen } from '../screens/GlobalScreen/ExtraPDFScreen';

export default function HomeTab({ navigation }) {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerTitle: () => <Header title={"Home"} />
      }} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Meet our Developers" component={DevelopersScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Menus" component={MenuScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Time Tables" component={TimeTableScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="ExtraPDF" component={ExtraPDFScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Open Source Libraries" component={OpenSourceLibScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </HomeStack.Navigator>
  )
}
