import React, { useContext, useEffect } from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native';
import BottomTabs from '../Tabs/BottomTabs';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from './Context';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppNav = () => {

  const NativeTheme = useTheme()

  const { isLoading, userToken, theme } = useContext(AuthContext)

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  const check = async () => {
    try {
      const isDarkTheme = JSON.parse(await AsyncStorage.getItem("isDarkTheme"))
      console.log("isDarkTheme: " + isDarkTheme)
      if (isDarkTheme === null || isDarkTheme === undefined) {
        if (NativeTheme.dark) {
          toggleTheme(false)
        }
        else {
          toggleTheme(true)
        }
      }
    } catch (error) {
      console.error("check theme error -- ", error)
    }
  }

  // check()

  return (
    <NavigationContainer theme={theme}>
      {userToken !== null ? <BottomTabs /> : <LoginScreen />}
    </NavigationContainer>
  )
}
