import { MaterialIcons } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Movie } from '../../models/movie.model';
import { FavoritesContext } from '../../store/fav-context';

interface FavoriteButtonProps {
  movie: Movie;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, removeFavorite, addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const checkFavorite = async () => {
      setIsFavorite(favorites.some((fav: { id: number; }) => fav.id === props.movie.id));
    };

    checkFavorite();
  }, [props.movie]);

  const handleFavoritePress = async () => {
    if (isFavorite) {
      await removeFavorite(props.movie.id);
    } else {
      await addFavorite(props.movie);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity onPress={handleFavoritePress}>
      <MaterialIcons
        name={isFavorite ? 'favorite' : 'favorite-border'}
        size={24}
        color={isFavorite ? '#f44336' : '#fff'}
      />
    </TouchableOpacity>
  );
};

