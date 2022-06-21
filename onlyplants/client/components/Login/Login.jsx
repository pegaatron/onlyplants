import React from 'react';
import { View, Text } from 'react-native';
import useAuth from '../../../customHooks/useAuth.jsx';

const Login = () => {

  const { user } = useAuth();


  console.log(user);
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  )
}

export default Login