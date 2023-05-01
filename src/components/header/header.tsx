import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HView, HViewItem, VSeparator } from '../layout/layout';
import { Divider, HeaderWrapper, Title } from './header.style';

interface HeaderProps {
  title: string
  back?: boolean;
  onBackButton?: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderWrapper>
      <HView>
        {props.back &&
        <HViewItem wrap>
          <TouchableOpacity 
              onPress={props.onBackButton} 
              style={{marginTop: 13}}
            >
            <MaterialCommunityIcons name="arrow-left" color='#fff' size={24} />

            </TouchableOpacity>
            </HViewItem>
          }
          <HViewItem>
            <Title>{props.title}</Title>
          </HViewItem>
        </HView>
      <VSeparator />
      <Divider />
    </HeaderWrapper>
  );
}