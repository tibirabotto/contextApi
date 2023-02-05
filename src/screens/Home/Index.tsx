import React from 'react';
import { VStack, Text } from 'native-base';
import { Button } from '../../components/Button';
import {useNavigation} from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation<any>();

  function handleOrder() {
    navigation.navigate('Order');
  }


  return (
    <VStack flex={1} alignItems="center" paddingX={2} paddingY={32}>
        <Button name="Orders" onPress={handleOrder} />
    </VStack>
  );
}
