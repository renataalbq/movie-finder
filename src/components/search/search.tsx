import React from 'react';
import { TextInputProps } from 'react-native';
import { SearchInput } from './search.style';

type SearchProps = TextInputProps;

export const Search = ({
  ...textInputProps
}: SearchProps) => {

    return (
        <SearchInput
          {...textInputProps}
            underlineColorAndroid="transparent"
            placeholderTextColor="#FFF"
          />
    );
}