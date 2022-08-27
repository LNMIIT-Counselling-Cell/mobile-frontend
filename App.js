import React from 'react';
import { AuthProvider } from './components/Context';
import { AppNav } from './components/AppNav';

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
