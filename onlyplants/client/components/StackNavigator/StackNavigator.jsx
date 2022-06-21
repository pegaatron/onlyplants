import { React } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../../../customHooks/useAuth.jsx';
import Home from './Home.jsx';
import Chat from '../Chat/Chat.jsx';
import Profile from '../Profile/Profile.jsx';
import Swipe from '../Cards/Swipe.jsx';
import Login from '../Login/Login.jsx';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  const { user } = useAuth();

  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        {user ?
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Swipe" component={Swipe} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Chat" component={Chat} />
        </>
        :<Stack.Screen name="Login" component={Login} />
        }
      </Stack.Navigator>
  )
}

export default StackNavigator