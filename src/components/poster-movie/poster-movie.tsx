import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Poster } from './poster-movie.style';

interface PosterMovie {
    img: string;
    onPress: () => void;
}

export const PosterMovie: React.FC<PosterMovie> = (props) => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${props.img}` }} />
      </TouchableOpacity>
    );
  };