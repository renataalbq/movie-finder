import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomePage } from '../pages/home/home';
import { FavoriteMovie } from '../pages/favorite-movie/favorite-movie';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SettingsPage } from '../pages/settings/settings';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {

  return (
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 60,
            paddingBottom: 1,
            backgroundColor: '#1D1828',
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}>

        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="movie"
                size={25}
                color={
                  focused ? '#FF5523' : '#fdfdfd'
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="FavoriteMovie"
          component={FavoriteMovie}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="favorite"
                size={25}
                color={
                  focused ? '#FF5523' : '#fdfdfd'
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsPage}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="settings"
                size={25}
                color={
                  focused ? '#FF5523' : '#fdfdfd'
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    )
};