import { React, useEffect, useState, useContext } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTailwind } from 'tailwind-rn';
import axios from 'axios';
import useAxiosGet from '../../../customHooks/useAxiosGet.jsx';


const Profile = () => {
  const user = 'peggy@gmail.com';
  const navigation = useNavigation();
  const tw = useTailwind();

  const [about, setAbout] = useState('');
  const [difficulty, setDiff] = useState(0);
  const [water, setWater] = useState(0);
  const [sun, setSun] = useState(0);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [location, setLoc] = useState('');
  const {data, err, isLoading} = useAxiosGet('/profile', {params: {email:user}, mode:'cors'})


  useEffect(() => {
    if (data !== null) {
      setAbout(data.about);
      setDiff(data.difficulty);
      setWater(data.water);
      setSun(data.sun);
      setLoc(data.location);
      setImg(data.imgUrl);
      setName(data.username);
    }
  }, [data])

  return ( isLoading ?
    null
    :<View style={tw('flex flex-one items-center')}>
      <View style={tw('border-round profile-card')}>
        <ImageBackground/>
        <Text>MY NAME IS </Text>
      </View>
    </View>
  )
}

export default Profile