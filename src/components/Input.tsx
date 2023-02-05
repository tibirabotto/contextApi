import React from 'react';
import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({...rest} : IInputProps) {
  return (
    <NativeBaseInput
      borderColor="#000"
      _focus={
        {
          borderColor: "#000",
          bg: "#fff"
        }
      }
      {...rest}
    >

    </NativeBaseInput>
  );
}
