import React, { useState } from 'react';
import { Genre } from '../../models/genre.model';
import { GenreBadge, GenreText } from './genres.style';

interface GenreButtonProps {
  selectedGenre?: number;
  genre: Genre;
  onPress: (genre: any) => void;
}

export const GenreButton: React.FC<GenreButtonProps> = (props) => {
  const selected = props.genre.id === props.selectedGenre;
  return (
    <GenreBadge selected={selected} onPress={() => props.onPress(props.genre.id)}>
      <GenreText selected={selected}>{props.genre.name}</GenreText>
    </GenreBadge>
  );
}