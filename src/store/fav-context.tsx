import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie } from '../models/movie.model';

export const FavoritesContext = createContext({
  favorites:[],
  addFavorite: (movie: Movie) => {},
  removeFavorite: (id: number) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      const storageFavorites = await AsyncStorage.getItem('@favorites');
      if (storageFavorites) {
        setFavorites(JSON.parse(storageFavorites));
      }
    }
    loadFavorites();
  }, []);

  const addFavorite = (movie: Movie) => {
    setFavorites([...favorites, movie]);
    AsyncStorage.setItem('@favorites', JSON.stringify([...favorites, movie]));
  };

  const removeFavorite = (id: number) => {
    const newFavorites = favorites.filter(movie => movie.id !== id);
    setFavorites(newFavorites);
    AsyncStorage.setItem('@favorites', JSON.stringify(newFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};