import { React, useState } from 'react';
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

// timeout function to send a get request to my database every 20 seconds
// get messages
const Chat = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { user } = useAuth();
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState([
    {
      "author": "z@gmail.com",
      "text": "hey dude",
      "timestamp": 1656020587666
    },
    {
      "author": "ratman",
      "text": "nice plant",
      "timestamp": 1656020587666
    },
    {
      "author": "z@gmail.com",
      "text": "no",
      "timestamp": 1656020587666
    }
  ]);


  const sendMessage = () => {};

  return (
    <SafeAreaView style={tw('flex-1')}>
      <Header title={params.item.username}/>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw('flex-1')}
      keyboardVerticalOffset={10}
      >
        {
          msgs.length > 0 ?
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              {msgs.map((msg, key) => (
                msg.author === user ?
                <UserMsg key={key}/>
                : <SenderMsg key={key}/>
              ))}
            </View>
          </TouchableWithoutFeedback>
          : null
        }

          <View
          style={tw('flex-row justify-between items-center bg-white px-5 py-2 w-full')}>
            <TextInput
            style={tw('h-10 text-l')}
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