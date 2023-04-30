import React from 'react';
import { TextInputProps } from 'react-native';
import { InputStyled } from './input.style';

type InputProps = TextInputProps;

export const Input = ({
  ...textInputProps
}: InputProps) => {

    return (
        <InputStyled
          {...textInputProps}
            placeholderTextColor="#101010"
          />
    );
}