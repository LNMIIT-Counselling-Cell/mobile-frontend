import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CollegeScreen from '../screens/CollegeScreen/CollegeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';
import { HolidayCalenderScreen } from '../screens/CollegeScreen/HolidayCalenderScreen';
import { MessMenuScreen } from '../screens/CollegeScreen/MessMenuScreen';
import { BusTimeTableScreen } from '../screens/CollegeScreen/BusTimeTableScreen';
import { HeadOfDepartmentScreen } from '../screens/CollegeScreen/HeadOfDepartmentScreen';
import { HeadOfSectionScreen } from '../screens/CollegeScreen/HeadOfSectionScreen';
import { HostelContactsScreen } from '../screens/CollegeScreen/HostelContactScreen';
import { ImportantContactsScreen } from '../screens/CollegeScreen/ImportantContactsScreen';
import { DevelopersScreen } from '../screens/DevelopersScreen';

export default function CollegeTab() {
  const CollegeStack = createStackNavigator();
  return (
    <CollegeStack.Navigator>
      <CollegeStack.Screen name="College Administration" component={CollegeScreen} options={{
        headerTitle: () => <Header title={"College Administration"} />
      }} />
      <CollegeStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Meet our Developers" component={DevelopersScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Holiday Calendar" component={HolidayCalenderScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Mess Menu" component={MessMenuScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Bus Time Table" component={BusTimeTableScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Important Contacts" component={ImportantContactsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Head of Departments" component={HeadOfDepartmentScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Head of Sections" component={HeadOfSectionScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Hostel Contacts" component={HostelContactsScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </CollegeStack.Navigator>
  )
}
