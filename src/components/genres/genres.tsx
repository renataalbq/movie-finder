import React, { useState } from 'react';
import { Genre } from '../../models/genre.model';
import { GenreButton } from './genre-button';
import { GenreWrapper } from './genres.style';

interface GenresProps {
  genres: Genre[];
  onGenreSelected: any;
}


export const Genres: React.FC<GenresProps> = (props) => {

  return (
    <GenreWrapper horizontal showsHorizontalScrollIndicator={false}>
      {props.genres?.map((genre: Genre) => (
        <GenreButton key={genre.id} genre={genre} onPress={props.onGenreSelected} />
      ))}
    </GenreWrapper>
  );
}