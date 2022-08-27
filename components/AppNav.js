import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from '../Tabs/BottomTabs';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from './Context';
import { View, ActivityIndicator } from 'react-native';

export const AppNav = () => {

  const { isLoading, userToken } = useContext(AuthContext)

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <BottomTabs /> : <LoginScreen />}
    </NavigationContainer>
  )
}
