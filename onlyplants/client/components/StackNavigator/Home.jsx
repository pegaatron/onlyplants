import { React, useState, useEffect, createContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useAxiosGet from '../../../customHooks/useAxiosGet.jsx';
import useAuth from '../../../customHooks/useAuth.jsx';

const UserContext = createContext();

const Home = () => {

  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
      title='See Profile'
      onPress={() => navigation.navigate('Profile')}
      />
      <Button
      title='See Swipes'
      onPress={() => navigation.navigate('Swipe')}
      />
      <Button
      title='See Chat'
      onPress={() => navigation.navigate('Chat')}
      />
    </View>
  )
}

export default Home