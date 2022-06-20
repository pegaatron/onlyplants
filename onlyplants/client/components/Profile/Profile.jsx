import { React, useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import axios from 'axios';


const Profile = () => {
  const user = 'peggy@gmail.com';
  const navigation = useNavigation();
  const tw = useTailwind();

  useEffect(() => {
    axios.get('http://localhost:3001/profile', {params: {email: user}, mode:'cors'})
    .then((data) => {console.log(data.data)})
    .catch((err) => console.log(err))
  })

  return (
    <View style={tw('flex-one items-center justify-center')}>
      <Text>Profile Screen</Text>
    </View>
  )
}

export default Profile