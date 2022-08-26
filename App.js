import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './Tabs/BottomTabs';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <NavigationContainer>
      {/* <BottomTabs /> */}
      <LoginScreen />
    </NavigationContainer>
  );
}
