import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { StackRoutes } from './stack-routes';
import { FavoritesProvider } from '../store/fav-context';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme?.colors,
    background: '#190c38'
  }
}

export const AppRoutes = () => {

  return (
    <FavoritesProvider>
      <NavigationContainer theme={Theme}>
        <StackRoutes />
      </NavigationContainer>
   </FavoritesProvider>
  );
};
