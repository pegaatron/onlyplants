import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';


const SenderMsg = () => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const { params } = useRoute();

  return (
    <View>
      <Text>SenderMsg</Text>
    </View>
  )
}

export default SenderMsg