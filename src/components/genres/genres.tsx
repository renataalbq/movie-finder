import React, { useState } from 'react';
import { Genre } from '../../models/genre.model';
import { GenreButton } from './genre-button';
import { GenreWrapper } from './genres.style';

interface GenresProps {
  genres: Genre[];
  onGenreSelected: any;
  selectedGenre?: number;
}

export const Genres: React.FC<GenresProps> = (props) => {

  const handleGenreSelection = (genre: Genre) => {
    if (props.selectedGenre === genre.id) {
      props.onGenreSelected(null);
    } else {
      props.onGenreSelected(genre.id);
    }
  };

  return (
    <GenreWrapper horizontal showsHorizontalScrollIndicator={false}>
      {props.genres?.map((genre: Genre) => (
        <GenreButton key={genre.id} genre={genre} onPress={() => handleGenreSelection(genre)} selectedGenre={props.selectedGenre} />
      ))}
    </GenreWrapper>
  );
}