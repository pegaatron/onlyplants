import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import useAuth from '../../../customHooks/useAuth.jsx';
import { useTailwind } from 'tailwind-rn';
import useAxiosGet from '../../../customHooks/useAxiosGet.jsx';
import { useNavigation, useRoute } from '@react-navigation/core';

// ideally we pass down the entire card as a prop where we can access
// cache user information for future matches so you don't always have to send the same axios get request
const Match = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { user } = useAuth();
  const { data } = useAxiosGet('/profile', {params: {email:user}, mode:'cors'});
  const [userInfo, setUserInfo] = useState(null);
  const { matchedInfo } = params;

  useEffect(() => {
    if (data !== null) {
      setUserInfo(data[0]);
    }
  }, [data])

  return ( userInfo && data ?
    <View style={tw('flex-1 bg-green-200 w-full h-full items-center opacity-80')}>
      {/* Header */}
      <View style={tw('flex flex-row')}>
        <Image style={tw('h-14 w-14')} source={require('./logo.png')}/>
        <Text style={tw('match-logo')}>OnlyPlants</Text>
      </View>
      {/* MatchText */}
      <View style={tw('relative h-full w-full items-center py-top-10')}>
        <Text style={tw('match-logo')}>Pot it like it's hot!</Text>
        <Text style={tw('match-logo')}>You and {matchedInfo.username} liked each other's plants</Text>
        {/* UserPlantPhotos */}
        <View style={tw('flex flex-row justify-evenly w-full py-top-10')}>
          <Image
          style={tw('h-50 w-50 rounded-full px-6 round-border')}
          source={{uri: userInfo.imgUrl}}/>
          <Image
          style={tw('h-50 w-50 rounded-full px-6 round-border')}
          source={{uri: matchedInfo.imgUrl}}/>
        </View>
        {/* Chat Button */}
        <View style={tw('py-top-5')}>
          <View>
            <Text style={tw('match-logo')}>Send a message</Text>
          </View>
          <TouchableOpacity style={tw('flex items-center py-top-5')}>
            <Text style={tw('match-logo chat-btn p-3 rounded-xl')}>Chat Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    : null
  )
}

export default Match