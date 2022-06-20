import { React, useState, createContext } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.jsx';
import Chat from '../Chat/Chat.jsx';
import Profile from '../Profile/Profile.jsx';
import Swipe from '../Cards/Swipe.jsx';
import Login from '../Login/Login.jsx';

const Stack = createNativeStackNavigator();
export const UserContext = createContext();

const StackNavigator = () => {
  const [user, setUser] = useState('peggy@gmail.com');
  const isLogged = true
  // make sure there is a user logged in, otherwise display login screen

  return (
      <Stack.Navigator>
        {isLogged ?
        <>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Swipe" component={Swipe} />
          <Stack.Screen name="Chat" component={Chat} />
        </>
        :<Stack.Screen name="Login" component={Login} />
        }
      </Stack.Navigator>
  )
}

export default StackNavigator