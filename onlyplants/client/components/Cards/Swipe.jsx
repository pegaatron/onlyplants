import { React, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../../../customHooks/useAuth.jsx';
import { useTailwind } from 'tailwind-rn';


const Swipe = () => {

  const navigation = useNavigation();
  const { imgUrl } = useAuth();
  const tw = useTailwind();
  // some logout function from useAuth

  useEffect(() => {
    console.log(imgUrl)
  },[])

  return (
    <SafeAreaView>
      <Text>Swipe Screen</Text>
      {/* CardContainer */}
      <View>
        <TouchableOpacity>
          <Image style={tw('h-10 w-10')}source={{uri: imgUrl}}/>
        </TouchableOpacity>
        {/* Card */}
        <View>
          {/* ProfilePic */}
          <View>

          </View>
          {/* AboutSectionContainer */}
          <View>
            {/* BasicInfo (name, type, location) */}
            {/* SCroll down for more info (care, about, etc) */}
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Swipe