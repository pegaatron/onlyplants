import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';
import useAuth from '../../../customHooks/useAuth.jsx';


const UserMsg = ( {msg} ) => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const { user, imgUrl } = useAuth();

  return (
    <View style={[tw('flex-row align-start px-5 my-bot-2'),
    {alignSelf: "flex-start"}]}>
      <View>
        <Image
        source={{uri: imgUrl}}
        style={tw('rounded-full h-12 w-12')}/>
      </View>
      <View
      style={[tw('flex-row align-start bg-white px-5 py-3 mx-3 my-2 rounded-lg'),
      {alignSelf: "flex-start"}]}>
        <Text>{msg}</Text>
      </View>
    </View>
  )
}

export default UserMsg