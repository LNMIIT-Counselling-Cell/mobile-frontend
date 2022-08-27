import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [usrInfo, setUsrInfo] = useState(null);

  const login = ({ userInfo }) => {
    setIsLoading(true);
    axios.post('http://192.168.72.252:5000/signup', { userInfo })
      .then((response) => {
        console.log("response: ", response.data)
        const usrInfo = response.data;
        setUsrInfo(usrInfo);
        setUserToken(usrInfo.userData.id);
        AsyncStorage.setItem('usrinfo', JSON.stringify(usrInfo));
        AsyncStorage.setItem('usrtok', usrInfo.userData.id);

        console.log("user token----", usrInfo.userData.id); //
      })
      .catch(err => console.error("axios error: " + err))

    setIsLoading(false);
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
      console.error(error); //
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, usrInfo }}>
      {children}
    </AuthContext.Provider>
  )
}
