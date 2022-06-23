import { React, useEffect, useRef } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../../../customHooks/useAuth.jsx';
import useAxiosGet from '../../../customHooks/useAxiosGet.jsx';
import { useTailwind } from 'tailwind-rn';
import { Ionicons, Entypo,  } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';
import Config from "react-native-config";
import axios from 'axios';
import Modal from './Match.jsx'



const Swipe = () => {

  const navigation = useNavigation();
  const { user, imgUrl, url } = useAuth();
  const { data, err } = useAxiosGet('/plantCard', {params: {email:user}, mode:'cors'});
  const tw = useTailwind();
  // some logout function from useAuth

  const handleRightSwipe = async (cardIndex) => {
    let headerInfo = {params: {name1: user, name2: data[cardIndex].email, userData: data[cardIndex], mode:'cors'}};
    axios.get(`${url}/match`, headerInfo)
    .then((data) => {
      if (data.data.length > 0) {
        axios.put(`${url}/match`, {name1: headerInfo.params.name1, name2: headerInfo.params.name2, data: headerInfo.params.data})
        .then(() => {
          let matchedInfo = headerInfo.params.userData;
          navigation.navigate('Match', { matchedInfo })
      })
        .catch((err) => console.log(err))
      } else {
        axios.post(`${url}/like`, {name1: headerInfo.params.name1, name2: headerInfo.params.name2})
        .catch((err) => console.log(err))
      }
    })
    .catch((err) => console.log(err))
  }
  return ( err ?
    null
    : data ?
    <SafeAreaView>
      {/* Header */}
      <View style={tw('h-full')}>
        <View style={tw('flex-row items-center justify-between w-full px-5')}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={tw('h-10 w-10 rounded-full')}source={{uri: imgUrl}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Match')}>
            <Image style={tw('h-14 w-14')} source={require('./logo.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <Ionicons name="chatbubbles" size={32} color="#9bbb8a" />
          </TouchableOpacity>
        </View>

        {/* Swipe Card*/}
        <View>
          <Swiper cards={data}
            containerStyle={{backgroundColor: 'transparent'}}
            stackSize={5}
            animateCardOpacity
            verticalSwipe={false}
            overlayLabels={{
              left: {
                title: 'nope',
                style: {
                  label: {
                    textAlign: "right",
                    color: "red"
                  },
                }
              },
              right: {
                title: 'match',
                style: {
                  label: {
                    textAlign: "left",
                    color: "#73a05c"
                  },
                }
              }
            }}
            onSwipedRight={(cardIndex) => {
              handleRightSwipe(cardIndex);
            }}
            renderCard={card => (
              <View style={tw('relative bg-green-400 h-3/4 rounded-xl')}>
                <Image
                  style={tw("absolute h-full w-full rounded-xl")}
                  source={{uri: card.imgUrl}}
                />
                {/* whiteText */}
                <View style={[tw('bottom bg-white w-full h-24 rounded-b-xl justify-between py-2 px-6')]}>
                  <View>
                    <View style={tw('flex-row items-center')}>
                      <View style={tw('py-top-1')}>
                        <Image
                          style={tw('h-10 w-10 rounded-full')}
                          source={{uri: card.profilePic}}/>
                      </View>
                      <View style={tw('px-3')}>
                        <Text style={tw('text-xl font-bold')}>{card.plant_type}</Text>
                        <Text>@{card.username}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              )}
          />
        </View>
      </View>
    </SafeAreaView>
    : null
  )
}

export default Swipe;

// Like buttons for future implementation,, couldn't style it correctly lol
          // <View style={tw('flex flex-row justify-evenly')}>
          //   <TouchableOpacity style={tw('items-center justify-center rounded-full h-14 w-14 bg-red-200')}>
          //     <Entypo name="cross" size={24} color="red" />
          //   </TouchableOpacity>
          //   <TouchableOpacity style={tw('items-center justify-center rounded-full h-14 w-14 bg-green-200')}>
          //     <Entypo name="heart" size={24} color="green" />
          //   </TouchableOpacity>
          // </View>