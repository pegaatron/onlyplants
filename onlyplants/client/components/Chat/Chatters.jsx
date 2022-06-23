import { React, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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

  return ( matches ?
    matches.length > 0 ?
    <View style={tw('flex h-full w-full')}>
      {matches.map((item, key) => (
        <View key={key}>
          <TouchableOpacity>
            <Text>{item.username}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
    : <View style={tw('flex h-full w-full justify-center items-center')}>
        <Text>Hey Chatters</Text>
      </View>
    : null
  )
}

export default Chatters