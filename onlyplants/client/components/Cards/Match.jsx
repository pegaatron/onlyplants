import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import useAuth from '../../../customHooks/useAuth.jsx';
import { useTailwind } from 'tailwind-rn';
import useAxiosGet from '../../../customHooks/useAxiosGet.jsx';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Entypo } from '@expo/vector-icons';

// ideally we pass down the entire card as a prop where we can access
// cache user information for future matches so you don't always have to send the same axios get request
const Match = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { user } = useAuth();
  const { data } = useAxiosGet('/profile', {params: {email:user}, mode:'cors'});
  const [userInfo, setUserInfo] = useState(null);
  const matchedInfo = params.matchedInfo;

  useEffect(() => {
    if (data !== null) {
      setUserInfo(data[0]);
    }
  }, [data])

  return ( userInfo && data ?
    <SafeAreaView style={tw('flex-1 bg-green-400 w-full h-full items-center')}>
      {/* Header */}
      <View style={tw('flex flex-row')}>
        <Image style={tw('h-14 w-14')} source={require('./logo.png')}/>
        <Text style={tw('match-logo')}>OnlyPlants</Text>
      </View>
      {/* MatchText */}
      <View style={tw('relative h-full w-full items-center py-top-10')}>
        <Text style={tw('match-logo')}>Pot it like it's hot!</Text>
        <Text style={tw('match-logo')}>You and {matchedInfo.username} matched</Text>
        {/* UserPlantPhotos */}
        <View style={tw('flex flex-row justify-evenly w-full py-top-10')}>
          <Image
          style={tw('h-50 w-50 rounded-full px-6')}
          source={{uri: userInfo.imgUrl}}/>
          <Image
          style={tw('h-50 w-50 rounded-full px-6')}
          source={{uri: matchedInfo.imgUrl}}/>
        </View>
        <View style={tw('py-top-5')}>
          <View>
            <Text style={tw('match-logo')}>Send a message?</Text>
          </View>
         {/* Chat Button */}
          <TouchableOpacity
          style={tw('flex items-center py-top-3')}
          onPress={() => navigation.navigate('Inbox')}>
            <Text style={tw('match-logo chat-btn p-3 rounded-xl')}>Chat Now</Text>
          </TouchableOpacity>
           {/* Back Button */}
           <TouchableOpacity
          style={tw('flex items-center py-top-3')}
          onPress={() => navigation.navigate('Swipe')}>
            <Text style={tw('match-logo chat-btn p-3 rounded-xl')}>Later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    : null
  )
}

export default Match