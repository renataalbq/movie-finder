import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { StackRoutes } from './stack-routes';
import { FavoritesProvider } from '../store/fav-context';
import { UserProvider } from '../store/user-context';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme?.colors,
    background: '#190c38'
  }
}

export const AppRoutes = () => {
  return (
    <UserProvider>
      <FavoritesProvider>
        <NavigationContainer theme={Theme}>
            <StackRoutes />
        </NavigationContainer>
    </FavoritesProvider>
   </UserProvider>
  );
};
