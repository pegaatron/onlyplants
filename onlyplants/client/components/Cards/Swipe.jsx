import { React, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../../../customHooks/useAuth.jsx';
import useAxiosGet from '../../../customHooks/useAxiosGet.jsx';
import { useTailwind } from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';


const Swipe = () => {

  const navigation = useNavigation();
  const { user, imgUrl } = useAuth();
  const { data } = useAxiosGet('/plantCard', {params: {email:user}, mode:'cors'});
  const tw = useTailwind();
  // some logout function from useAuth

  // useEffect(() => {
  //   console.log(data);
  // },[data])


  return ( data ?
    <SafeAreaView>
      {/* Header */}
      <View style={tw('flex-row items-center justify-between w-full px-5')}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image style={tw('h-10 w-10 rounded-full')}source={{uri: imgUrl}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={tw('h-14 w-14')} source={require('./logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubbles" size={32} color="#9bbb8a" />
        </TouchableOpacity>
      </View>
      {/* Swiper */}
      <View style={tw('flex-1')}>
        <Swiper cards={data}
          containerStyle={{backgroundColor: 'transparent'}}
          stackSize={5}
          animateCardOpacity
          verticalSwipe={false}
          renderCard={card => (
            <View style={tw('relative bg-green-400 h-3/4 rounded-xl')}>
              <Image
                style={tw("absolute h-full w-full rounded-xl")}
                source={{uri: card.imgUrl}}
              />
            </View>
            )}
        />
      </View>

    </SafeAreaView>
    : null
  )
}

export default Swipe