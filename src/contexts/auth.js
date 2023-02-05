import React, {createContext, useState} from "react";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [user, setUser] = useState({})
  const navigation = useNavigation();

  function signIn(email, password) {
    if (email !== '' && password !== '') {
      setUser({
        email: email,
        status: "actived"
      })
      navigation.navigate("Home")
    }

  }

  return (
    <AuthContext.Provider value={{name: "Tibira", signIn, user}}>
      {children}
    </AuthContext.Provider>
  )
}
