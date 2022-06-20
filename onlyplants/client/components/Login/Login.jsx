import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  )
}

export default Login