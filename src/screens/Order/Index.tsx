import React, {useContext} from 'react';
import { VStack, Text } from 'native-base';

import {AuthContext} from '../../contexts/auth.js'

export function Order() {
  const { name, user } = useContext(AuthContext)
  return (
    <VStack flex={1} alignItems="center" paddingX={2} paddingY={32}>
      <Text>Email: {user.email}</Text>
    </VStack>
  );
}
