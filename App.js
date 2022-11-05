import React, { useEffect } from 'react';
import { AuthProvider } from './components/Context';
import { AppNav } from './components/AppNav';
import SplashScreen from 'react-native-splash-screen';

export default function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000);
  }, [])

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
