import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';
import { Appearance, StatusBar } from 'react-native';
import { REACT_APP_PROD_URL } from '@env'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [usrInfo, setUsrInfo] = useState(null);

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const [systheme, setSysTheme] = useState('0');

  const login = async ({ userInfo }) => {
    setIsLoading(true);
    await axios.post(process.env.REACT_APP_PROD_URL + 'signup', { userInfo })
      .then((response) => {
        console.log("response 1: ", response.data)
        const usrInfo = response.data;
        setUsrInfo(usrInfo);
        setUserToken(userInfo.idToken);
        AsyncStorage.setItem('usrinfo', JSON.stringify(usrInfo));
        AsyncStorage.setItem('usrtok', userInfo.idToken);

        console.log("user token----", userInfo.idToken);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.error("axios error: " + err.message)
      })
  }

  const logout = () => {
    setIsLoading(true);
    setUserToken(null)
    AsyncStorage.removeItem('usrinfo')
    AsyncStorage.removeItem('usrtok')
    AsyncStorage.removeItem('isRedirected')
    setIsLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true)
      let userInfo = await AsyncStorage.getItem('usrinfo');
      userInfo = JSON.parse(userInfo);
      let userToken = await AsyncStorage.getItem('usrtok');

      if (userInfo) {
        setUsrInfo(userInfo)
        setUserToken(userToken);
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error);
    }
  }

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'black',
      background: '#F0F0F0',
      card: '#F5F5F7',
      text: '#000000',
      cardBG: '#E8E7E7',
      iconColor: '#666666',
      iconActiveColor: "#000000",
    },
  }

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'white',
      background: '#3E3A66',
      card: '#2F2B54',
      text: '#FFFFFF',
      cardBG: '#5D5986',
      iconColor: '#BBBBBB',
      iconActiveColor: "#FFFFFF",
    },
  }

  const checkTheme = async () => {
    let currTheme;
    try {
      currTheme = await AsyncStorage.getItem('systheme');
      if (currTheme === undefined || currTheme === null) {
        setSysTheme('0');
        currTheme = '0';
        AsyncStorage.setItem('systheme', currTheme);
      }
    } catch (error) {
      console.error('Error theme', error);
    }
    setSysTheme(currTheme);
    if (currTheme !== '0') {
      if (currTheme === '1') {
        setIsDarkTheme(false);
      }
      else {
        setIsDarkTheme(true);
      }
    }
    else {
      const scheme = Appearance.getColorScheme();
      if (scheme === 'light') {
        setIsDarkTheme(false);
      }
      else {
        setIsDarkTheme(true);
      }
    }

  }
  if (Platform.OS === 'android') {
    isDarkTheme ? StatusBar.setBackgroundColor('#2F2B54') : StatusBar.setBackgroundColor('#F5F5F7');
  }
  isDarkTheme ? StatusBar.setBarStyle('light-content') : StatusBar.setBarStyle('dark-content');

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const toggleTheme = (isDarkTheme) => {
    setIsDarkTheme(isDarkTheme => !isDarkTheme)
    AsyncStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme))
  }

  useEffect(() => {
    checkTheme()
    if (Platform.OS === 'android') {
      isDarkTheme ? StatusBar.setBackgroundColor('#2F2B54') : StatusBar.setBackgroundColor('#F5F5F7');
    }
    isDarkTheme ? StatusBar.setBarStyle('light-content') : StatusBar.setBarStyle('dark-content');
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, usrInfo, toggleTheme, theme, checkTheme, systheme, isDarkTheme }}>
      {children}
    </AuthContext.Provider>
  )
}
