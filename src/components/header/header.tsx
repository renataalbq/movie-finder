import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { VSeparator } from '../layout/layout';
import { Divider, HeaderWrapper, Title } from './header.style';

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderWrapper>
      <Title>{props.title}</Title>
      <VSeparator />
      <Divider />
    </HeaderWrapper>
  );
}