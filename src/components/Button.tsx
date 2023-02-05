import React from 'react';
import { Button as NativeBaseButton, IBoxProps, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  name: string
}

export function Button({name, ...rest} : Props) {
  return (
    <NativeBaseButton
      w="full"
      bg="#C61101"
      _pressed={
        {
          bg: "#FF0000"
        }
      }
      {...rest}
    >
      <Text
        color="#fff"
      >{name}</Text>
    </NativeBaseButton>

  );
}
