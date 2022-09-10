import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';
import { MenuScreen } from '../screens/HomeScreen/MenuScreen';
import { TimeTableScreen } from '../screens/HomeScreen/TimeTableScreen';
import { TodayEventScreen } from '../screens/HomeScreen/TodayEventScreen';
import { CounsellingProcessScreen } from '../screens/HomeScreen/CounsellingProcessScreen';
import { MessMenuScreen } from '../screens/HomeScreen/MessMenuScreen';
import { BazingaMenuScreen } from '../screens/HomeScreen/BazingaMenuScreen';
import { TFBMenuScreen } from '../screens/HomeScreen/TFBMenuScreen';

export default function HomeTab({ navigation }) {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={HomeScreen} options={{
        headerTitle: () => <Header title={"Home"} />
      }} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Menus" component={MenuScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Time Tables" component={TimeTableScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Today's Events" component={TodayEventScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Counselling Process" component={CounsellingProcessScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Mess Menu" component={MessMenuScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="Bazinga Menu" component={BazingaMenuScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <HomeStack.Screen name="The Food Barn Menu" component={TFBMenuScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </HomeStack.Navigator>
  )
}
