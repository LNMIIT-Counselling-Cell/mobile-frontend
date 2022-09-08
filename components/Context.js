import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const NativeTheme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [usrInfo, setUsrInfo] = useState(null);

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const login = ({ userInfo }) => {
    setIsLoading(true);
    axios.post('http://192.168.167.252:5000/signup', { userInfo })
      .then((response) => {
        // console.log("response: ", response.data)
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
        console.error("axios error: " + err)
      })
  }

  const logout = () => {
    setIsLoading(true);
    setUserToken(null)
    AsyncStorage.removeItem('usrinfo')
    AsyncStorage.removeItem('usrtok')
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
      cardBG: '#E8E7E7'
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
      cardBG: '#5D5986'
    },
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const toggleTheme = (isDarkTheme) => {
    setIsDarkTheme(isDarkTheme => !isDarkTheme)
    AsyncStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme))
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
  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, usrInfo, toggleTheme, theme }}>
      {children}
    </AuthContext.Provider>
  )
}
