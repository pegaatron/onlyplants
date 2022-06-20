import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'


const Chat = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Chat Screen</Text>
    </View>
  )
}

export default Chat