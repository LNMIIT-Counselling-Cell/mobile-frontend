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
import { SopScreen } from '../screens/CollegeScreen/SopScreen';
import { CurriculumScreen } from '../screens/CollegeScreen/CurriculumScreen';
import { CSEScreen } from '../screens/CollegeScreen/CSE';
import { CCEScreen } from '../screens/CollegeScreen/CCE';
import { ECEScreen } from '../screens/CollegeScreen/ECE';
import { MEScreen } from '../screens/CollegeScreen/ME';
import { ImportantLinksScreen } from '../screens/CollegeScreen/ImportantLinksScreen';
import { CampusAreaMapScreen } from '../screens/CollegeScreen/CampusAreaMap';
import { AcademicAreaMapScreen } from '../screens/CollegeScreen/AcademicAreaMap';
import { OpenSourceLibScreen } from '../screens/OpenSourceLibScreen';
import { ExtraPDFScreen } from '../screens/GlobalScreen/ExtraPDFScreen';

export default function CollegeTab() {
  const CollegeStack = createStackNavigator();
  return (
    <CollegeStack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}
    >
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
      <CollegeStack.Screen name="ExtraPDF" component={ExtraPDFScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Mess Menu" component={MessMenuScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Bus Time Table" component={BusTimeTableScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Standard Operating Procedures" component={SopScreen} options={{
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
      <CollegeStack.Screen name="Curriculum (B. Tech. & M. Tech.)" component={CurriculumScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="CSE Curriculum" component={CSEScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="CCE Curriculum" component={CCEScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="ECE Curriculum" component={ECEScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="ME Curriculum" component={MEScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Campus Area Map" component={CampusAreaMapScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Academic Area Map" component={AcademicAreaMapScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Important Links" component={ImportantLinksScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Open Source Libraries" component={OpenSourceLibScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </CollegeStack.Navigator>
  )
}
