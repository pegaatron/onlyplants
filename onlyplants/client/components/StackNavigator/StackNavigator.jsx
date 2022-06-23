import { React, useEffect } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../../../tailwind.json';
import useAuth from '../../../customHooks/useAuth.jsx';
import Home from './Home.jsx';
import Chat from '../Chat/Chat.jsx';
import Profile from '../Profile/Profile.jsx';
import Swipe from '../Cards/Swipe.jsx';
import Login from '../Login/Login.jsx';
import Modal from '../Cards/Modal.jsx';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  const { user } = useAuth();

  return (
    <TailwindProvider utilities={utilities}>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        {user ?
        <>
        <Stack.Group>
          <Stack.Screen name="Swipe" component={Swipe} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: "modal"}}>
          <Stack.Screen name='Modal' component={Modal}/>
        </Stack.Group>
        </>
        :<Stack.Screen name="Login" component={Login} />
        }
      </Stack.Navigator>
    </TailwindProvider>
  )
}

export default StackNavigator