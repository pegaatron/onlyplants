import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
      title='See Profile'
      onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

export default Home