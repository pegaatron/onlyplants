import { React, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';
import useAxiosGet from '../../../customHooks/useAxiosGet.jsx';
import useAuth from '../../../customHooks/useAuth.jsx';
import axios from 'axios';

// List of available chatters
// get request to matches for isMatch true AND name1 OR name2 === user's name
// as of now, since the app only supports one user, we only need to check for where isMutual is true

const Chatters = () => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const { user, url } = useAuth();
  const { data, err, isLoading } = useAxiosGet('/allMatches', {params: {email:user}, mode:'cors'})
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (data !== null && data.length > 0) {

      data.forEach((item) => {
        axios.get(`${url}/profile`, {params: {email:item}, mode:'cors'})
        .then((data) => setMatches(prev => [...prev, data.data[0]]))
        .catch((err) => console.log(err))
      })

    }
  }, [data])

  return ( data ?
    matches.length > 0 ?
    <SafeAreaView style={tw('flex h-full')}>
      {matches.map((item, key) => (
        <TouchableOpacity
        key={key}
        style={[tw('flex-row bg-white py-2 px-5 chat-row-div rounded-lg'), styles]}
        onPress={() => navigation.navigate('Chat', { item })}>
          <Image source={{uri: item.imgUrl}} style={tw('rounded-full h-16 w-16 mr-3')}/>
          <View>
            <Text style={tw('font-semibold py-top-1 text-m')}>{item.username}</Text>
            <Text style={tw('py-top-1')}>Say Hi!</Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
    : <View style={tw('flex h-full w-full justify-center items-center')}>
        <Text>No matches yet.</Text>
      </View>
    : null
  )
}

export default Chatters

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
}
})