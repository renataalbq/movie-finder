import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, VSeparator, VView } from '../../components/layout/layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Switch } from 'react-native';
import { ButtonLogout, Content, Setting, SettingsOption, TextLogoutButton, Title } from './settings.style';
import { Header } from '../../components/header/header';
import { Divider } from '../../components/header/header.style';


export const SettingsPage = () => {
  const navigation = useNavigation();
  const [isAlphaOrder, setIsAlphaOrder] = useState(false);
  const [isReleaseDateOrder, setIsReleaseDateOrder] = useState(false);
  const [order, setOrder]  = useState('');

  const handleToggle = async (value: string) => {
    setOrder(value);
    if (value == 'alpha') {
        setIsAlphaOrder(true)
    } else {
        setIsReleaseDateOrder(true)
    }
    await AsyncStorage.setItem('order', value);
  };

  function handleLogout() {
    navigation.navigate('Login')
  }

  return (
    <Container>
        <Header title='Settings' />
        <Content>
            <Title>Order movies by:</Title>
            <Setting>
                <SettingsOption>Alphabetical Order</SettingsOption>
                <Switch
                value={isAlphaOrder}
                onValueChange={() => handleToggle('alpha')}
                />
            </Setting>
            <Setting>
                <SettingsOption>Release Date Order</SettingsOption>
                <Switch
                value={isReleaseDateOrder}
                onValueChange={() => handleToggle('release')}
                />
            </Setting>
            <VSeparator />
            <Divider />
            <VSeparator />
            <VView center>
              <ButtonLogout onPress={handleLogout}>
                  <TextLogoutButton>Logout</TextLogoutButton>
              </ButtonLogout> 
            </VView>
        </Content>
    </Container>
  );
};
