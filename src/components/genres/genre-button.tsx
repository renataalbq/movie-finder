import React, { useState } from 'react';
import { Genre } from '../../models/genre.model';
import { GenreBadge, GenreText } from './genres.style';

interface GenreButtonProps {
  genre: Genre;
  onPress: (genre: number) => void;
}

export const GenreButton: React.FC<GenreButtonProps> = (props) => {

  return (
    <GenreBadge onPress={() => props.onPress(props.genre.id)}>
      <GenreText>{props.genre.name}</GenreText>
    </GenreBadge>
  );
}