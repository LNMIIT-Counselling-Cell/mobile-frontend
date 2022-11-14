import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CollegeTab from './CollegeTab';
import GymkhanaTab from './GymkhanaTab';
import HomeTab from './HomeTab';
import PassTab from './OutpassTab';
import AboutTab from './AboutTab';
import { getFocusedRouteNameFromRoute, useTheme } from '@react-navigation/native';
import CustomIcon from '../components/CustomIcon';

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  const { colors } = useTheme();

  const getBottomTabDisplay = (route) => {
    const screenNames = ["Settings", "Meet our Developers", "Important Contacts", "Head of Departments", "Head of Sections", "Hostel Contacts", "Cultural Council", "Science & Technology Council", "Sports Council", "COSHA Committee", "Badminton", "Basketball", "Chess", "Cricket", "Football", "Kabaddi", "Table Tennis", "Volleyball", "Menus", "Time Tables", "Today's Events", "Generated Outpass", "Previous Outpass", "Open Source Libraries", "Curriculum (B. Tech. & M. Tech.)", "Important Links", "Club Fest", "ExtraPDF"];
    const currentRoute = getFocusedRouteNameFromRoute(route);
    for (let i = 0; i < screenNames.length; i++) {
      const screen = screenNames[i];
      if (currentRoute === screen) {
        return 'none';
      }
    }
    return 'flex';
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { height: 55, display: getBottomTabDisplay(route) },
        tabBarActiveTintColor: colors.iconActiveColor,
        tabBarInactiveTintColor: colors.iconColor,
      })}
      initialRouteName="Home"
      backBehavior='initialRoute'
    >
      <Tab.Screen name="College" component={CollegeTab}
        options={{
          tabBarLabel: 'College',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name={focused ? 'college-filled' : 'college'}
              size={24}
              color={color} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen name="Gymkhana" component={GymkhanaTab}
        options={{
          tabBarLabel: 'Gymkhana',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name={focused ? 'gymkhana-filled' : 'gymkhana'}
              size={24}
              color={color} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen name="Home" component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name={focused ? 'home-filled' : 'home'}
              size={24}
              color={color} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen name="OutpassTab" component={PassTab}
        options={{
          tabBarLabel: 'Outpass',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name={focused ? 'outpass-filled' : 'outpass'}
              size={24}
              color={color} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen name="About" component={AboutTab}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name={focused ? 'about-filled' : 'about'}
              size={24}
              color={color} />
          ),
          activeTintColor: 'red',
          inactiveTintColor: 'green',
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  )
}
