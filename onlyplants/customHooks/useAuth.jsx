import { React, createContext, useContext } from 'react';
import { View, Text } from 'react-native';


// HOC to pass down all AUTH information + email down to child components
// Cards: email will help generate a card that is NOT your own
// Profile: Generate information pertaining to YOUR account
// Chat: pull up chat history belonging to YOU
const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const checkCredentials = (info) => {
    // axios request to user database
    // if data returned is null, invalid login,
    // if data is NOT null, valid login and return infomation in return
  }

  return (
    <AuthContext.Provider value={{
      user: 'peggy@gmail.com',
      imgUrl: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80"
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}