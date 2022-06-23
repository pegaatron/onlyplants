import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';


const UserMsg = () => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const { params } = useRoute();

  return (
    <View>
      <Text>UserMsg</Text>
    </View>
  )
}

export default UserMsg