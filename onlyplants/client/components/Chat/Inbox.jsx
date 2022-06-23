import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import Header from './Header.jsx';
import Chatters from './Chatters.jsx';

// overall inbox screen
const Inbox = () => {
  const navigation = useNavigation();
  const tw = useTailwind();
  return (
    <View style={tw('h-full w-full flex')}>
      <Header/>
      <Chatters/>
    </View>
  )
}

export default Inbox