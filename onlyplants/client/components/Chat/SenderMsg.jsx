import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';


const SenderMsg = ({ msg }) => {
  const navigation = useNavigation();
  const tw = useTailwind();

  return (
    <View
    style={[tw('flex-row align-start bg-green-400 px-5 py-3 mx-3 my-2 rounded-lg'),
    {alignSelf: "flex-start", marginLeft: "auto"}]}>
      <Text style={{color:"white"}}>{msg}</Text>
    </View>
  )
}

export default SenderMsg