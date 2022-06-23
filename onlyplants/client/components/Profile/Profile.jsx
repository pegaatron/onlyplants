import { React, useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Header } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';
import useAxiosGet from '../../../customHooks/useAxiosGet.jsx';
import useAuth from '../../../customHooks/useAuth.jsx';

// TODO: make sun, water, difficulty divs render out sun icons, water icons, and stars(?)
const Profile = () => {

  const navigation = useNavigation();
  const tw = useTailwind();
  const [about, setAbout] = useState('');
  const [difficulty, setDiff] = useState(0);
  const [water, setWater] = useState(0);
  const [sun, setSun] = useState(0);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [location, setLoc] = useState('');
  const [plant_type, setType] = useState('');
  const { user } = useAuth();
  const {data, err, isLoading} = useAxiosGet('/profile', {params: {email:user}, mode:'cors'})


  useEffect(() => {
    if (data !== null) {
      setAbout(data[0].about);
      setDiff(data[0].difficulty);
      setWater(data[0].water);
      setSun(data[0].sun);
      setLoc(data[0].location);
      setImg(data[0].imgUrl);
      setName(data[0].username);
      setType(data[0].plant_type);
    }
  }, [data])

  return ( isLoading ?
    null:
    data ?
    <SafeAreaView style={tw('flex flex-one items-center')}>
      <View style={tw('flex flex-row py-2 w-full px-3')}>
        <TouchableOpacity
        style={tw('flex flex-row')}
        onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={28} color="#9bbb8a" />
          <Text style={tw('back-text')}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={tw('flex rounded-xl profile-card flex-column items-center bg-white')}>
        <View>
          <Image source={{uri: img}}
           resizeMode="cover"
           style={tw('h-64 w-64 rounded-full')}>
          </Image>
        </View>
        <View style={tw('profile-content')}>
          <Text style={tw('profile-content')}>Name: {name} </Text>
          <Text style={tw('profile-content')}>Plant type: {plant_type} </Text>
          <Text style={tw('profile-content')}>Location: {location} </Text>
          <Text style={tw('profile-content')}>About: {about} </Text>
          <Text style={tw('profile-content')}>Water: {water}</Text>
          <Text style={tw('profile-content')}>Sun: {sun}</Text>
          <Text style={tw('profile-content')}>Difficulty: {difficulty}</Text>
        </View>
      </View>
    </SafeAreaView>
    : null
  )
}

export default Profile