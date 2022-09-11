import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CollegeTab from './CollegeTab';
import GymkhanaTab from './GymkhanaTab';
import HomeTab from './HomeTab';
import OutpassTab from './OutpassTab';
import AboutTab from './AboutTab';

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="About">
      <Tab.Screen name="College" component={CollegeTab}
        options={{
          tabBarLabel: 'College',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/college_tab_filled.png')
                  : require('../assets/icons/college_tab.png')
              }
              style={{
                width: 24,
                height: 24,
                // borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Gymkhana" component={GymkhanaTab}
        options={{
          tabBarLabel: 'Gymkhana',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/gymkhana_tab_filled.png')
                  : require('../assets/icons/gymkhana_tab.png')
              }
              style={{
                width: 24,
                height: 24,
                // borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Home" component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/home_tab_filled.png')
                  : require('../assets/icons/home_tab.png')
              }
              style={{
                width: 24,
                height: 24,
                // borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="OutpassTab" component={OutpassTab}
        options={{
          tabBarLabel: 'Outpass',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/outpass_tab_filled.png')
                  : require('../assets/icons/outpass_tab.png')
              }
              style={{
                width: 24,
                height: 24,
                // borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="About" component={AboutTab}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/about_tab.png')
                  : require('../assets/icons/about_tab.png')
              }
              style={{
                width: 24,
                height: 24,
                // borderRadius: size,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
