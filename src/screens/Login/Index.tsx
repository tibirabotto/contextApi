import React, { useState, useContext } from 'react';
import { VStack, Text } from 'native-base';
import { Input } from '../../components/Input';
import {Button} from '../../components/Button';
import {AuthContext} from '../../contexts/auth.js'
import {useNavigation} from '@react-navigation/native'
import { Alert } from 'react-native';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);
  const navigation = useNavigation<any>();

  function handleLogin() {
    signIn(email, password)
  }
  return (

    <VStack flex={1} alignItems="center" paddingX={2} paddingY={32}>
        <Text marginBottom={2}>Wellcome!!!</Text>
        <Input
          marginBottom={2}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <Input
          marginBottom={2}
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button name='Login' onPress={handleLogin} />
    </VStack>
  );
}
