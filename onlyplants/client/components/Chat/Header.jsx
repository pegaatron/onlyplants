import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';


const Header = ({title}) => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const { params } = useRoute();

  return (
    <View>
      <View style={tw('flex flex-row py-4 w-full px-3')}>
        <TouchableOpacity
        style={tw('flex flex-row')}
        onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={28} color="#9bbb8a" />
          <Text style={tw('back-text')}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header