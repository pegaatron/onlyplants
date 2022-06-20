import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'


const Swipe = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Swipe Screen</Text>
    </View>
  )
}

export default Swipe