import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';


const Header = () => {
  const navigation = useNavigation();
  const tw = useTailwind();
  return (
    <View>
      <View style={tw('flex flex-row py-2 w-full px-3')}>
        <TouchableOpacity
        style={tw('flex flex-row')}
        onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={28} color="#9bbb8a" />
          <Text style={tw('back-text')}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header