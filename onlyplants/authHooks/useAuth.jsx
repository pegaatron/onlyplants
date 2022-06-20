import React from 'react';
import { View, Text } from 'react-native';


// HOC to pass down all AUTH information + email down to child components
// Cards: email will help generate a card that is NOT your own
// Profile: Generate information pertaining to YOUR account
// Chat: pull up chat history belonging to YOU

export const AuthProvider = () => {
  return (
    <View>
      <Text>Me Autho</Text>
    </View>
  )
}