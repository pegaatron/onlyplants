import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import StackNavigator from './client/components/StackNavigator/StackNavigator.jsx';
import { AuthProvider } from './customHooks/useAuth.jsx';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <TailwindProvider utilities={utilities}>
          <StackNavigator/>
        </TailwindProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

