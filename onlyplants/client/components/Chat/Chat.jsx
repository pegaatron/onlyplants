import { React, useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Flatlist
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import useAuth from '../../../customHooks/useAuth.jsx';
import { useTailwind } from 'tailwind-rn';
import Header from './Header.jsx';
import UserMsg from './UserMsg.jsx';
import SenderMsg from './SenderMsg.jsx';
import axios from 'axios';

// timeout function to send a get request to my database every 20 seconds
// get messages
const Chat = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { user, url } = useAuth();
  const [input, setInput] = useState('');
  const chatterInfo = params.item;
  const [msgs, setMsgs] = useState([]);

  const sendMessage = () => {
    let info = {
      user: chatterInfo.username,
      author: user,
      text: input
    };
    axios.post(`${url}/chat`, info)
    .then(() => getNewChatLog())
    .catch((err) => console.log(err))

    setInput('');
  };

  useEffect(() => {
    console.log(msgs)
    getNewChatLog()
  }, [])
  // everytime you switch chat rooms, get request to the db for new user you're talking to
  const getNewChatLog = () => {
    axios.get(`${url}/chatHistory`, {params: {user:chatterInfo.username}, mode:'cors'})
    .then((data) => {
      setMsgs(data.data[0].messageLog)
    })
    .catch((err) => console.log(err))
  };

  return (
    <SafeAreaView style={tw('h-full flex-1 justify-end')}>
      <Header title={params.item.username}/>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw('flex-1')}
      keyboardVerticalOffset={10}
      >
        {msgs ?
          msgs.length > 0 ?
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              {msgs.map((msg, key) => (
                msg.author === user ?
                <UserMsg key={key} msg={msg.text}/>
                : <SenderMsg key={key} msg={msg.text} />
              ))}
            </View>
          </TouchableWithoutFeedback>
          : null
          : null
        }
          <View
          style={tw('flex-row justify-between items-center bg-white px-5 py-2 w-full')}>
            <TextInput
            style={tw('h-10 text-l w-full mx-3')}
            placeholder='Type Something...'
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            value={input}
            />
            <Button onPress={sendMessage} title='Send' color='#9bbb8a'/>
          </View>
        </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default Chat