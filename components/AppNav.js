import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from '../Tabs/BottomTabs';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from './Context';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { GuestUserScreen } from '../screens/GuestUserScreen';


export const AppNav = () => {

  const { isLoading, userToken, theme } = useContext(AuthContext)

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  function AuthTab() {
    const AuthStack = createStackNavigator();
    return (
      <AuthStack.Navigator
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <AuthStack.Screen name="Auth" component={LoginScreen} options={{
          headerTitleAlign: 'center',
          headerShown: false
        }} />
        <AuthStack.Screen name="Guest User" component={GuestUserScreen} options={{
          headerTitleAlign: 'center',
        }} />
      </AuthStack.Navigator>
    )
  }

  return (
    <NavigationContainer theme={theme}>
      {userToken !== null ? <BottomTabs /> : <AuthTab />}
    </NavigationContainer>
  )
}
