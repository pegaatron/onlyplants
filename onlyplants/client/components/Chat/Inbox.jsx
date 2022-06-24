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
    <SafeAreaView style={tw('h-full w-full flex')}>
      <Header title='Chat'/>
      <Chatters/>
    </SafeAreaView>
  )
}

export default Inbox