import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MovieDetailPage } from '../pages/detail-movie/detail-movie';
import { FavoriteMovie } from '../pages/favorite-movie/favorite-movie';
import { TabRoutes } from './tab-routes';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';

const Stack = createStackNavigator();

export const StackRoutes = () => {
  return (
  <Stack.Navigator initialRouteName="Home"
  screenOptions={{
    gestureEnabled: true,
    headerShown: false,
    headerTintColor: '#FF5523',
  }}>
    <Stack.Screen name="Home" component={TabRoutes} />
    <Stack.Screen name="MovieDetail" component={MovieDetailPage} options={{ headerShown: true, title: 'Movie Detail', presentation: 'modal'}} />
    <Stack.Screen name="Login" component={LoginPage} />
    <Stack.Screen name="SignUp" component={SignUpPage} />

  </Stack.Navigator>
  )
}