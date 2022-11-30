import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CollegeScreen from '../screens/CollegeScreen/CollegeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';
import { HeadOfDepartmentScreen } from '../screens/CollegeScreen/HeadOfDepartmentScreen';
import { HeadOfSectionScreen } from '../screens/CollegeScreen/HeadOfSectionScreen';
import { HostelContactsScreen } from '../screens/CollegeScreen/HostelContactScreen';
import { ImportantContactsScreen } from '../screens/CollegeScreen/ImportantContactsScreen';
import { DevelopersScreen } from '../screens/DevelopersScreen';
import { CurriculumScreen } from '../screens/CollegeScreen/CurriculumScreen';
import { ImportantLinksScreen } from '../screens/CollegeScreen/ImportantLinksScreen';
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
      <CollegeStack.Screen name="College" component={CollegeScreen} options={{
        headerTitle: () => <Header title={"College Administration"} />
      }} />
      <CollegeStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Meet our Developers" component={DevelopersScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="ExtraPDF" component={ExtraPDFScreen} options={{
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
      <CollegeStack.Screen name="Important Links" component={ImportantLinksScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <CollegeStack.Screen name="Open Source Libraries" component={OpenSourceLibScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </CollegeStack.Navigator>
  )
}
