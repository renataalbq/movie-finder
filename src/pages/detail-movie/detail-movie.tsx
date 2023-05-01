import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { HSeparator, HView, VSeparator } from '../../components/layout/layout';
import { getCastingMovie, getDetailMovie } from '../../services/api';
import { handleShare } from '../../utils/share-function';
import { FavoriteButton } from '../../components/favorite/favorite-button.component';
import { ButtonsContainer, CastText, Container, InfoContainer, InfoDescription, InfoTitle, InfoWrapper, Overview,Poster, Title, TitleContent } from './detail-movie.style';
import { MaterialIcons } from '@expo/vector-icons';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  isFavorite?: boolean;
}

export const MovieDetailPage = () => {
  const route = useRoute()
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(true);
  const [credits, setCredits] = React.useState([]);

  useEffect(() => {
    getDetailMovie(route.params?.id, setMovie, setIsLoading)
  }, []);

  useEffect(() => {
    getCastingMovie(route.params?.id, setCredits)
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Container>
        <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} />

        <InfoWrapper>  
          <TitleContent>
            <Title> {movie?.title}</Title>
            <ButtonsContainer>
              <TouchableOpacity onPress={() => handleShare(movie)}>
                <MaterialIcons name='share' size={24} color="#ffffff" />
              </TouchableOpacity>
              <FavoriteButton movie={movie} />
            </ButtonsContainer>
          </TitleContent>

          <Overview>{movie?.overview}</Overview>
          <VSeparator />

          <HView between>
            <InfoContainer>
              <InfoTitle>Duration</InfoTitle>
              <InfoDescription>{movie?.runtime} minutes</InfoDescription>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Rating</InfoTitle>
              <InfoDescription>{movie?.vote_average.toFixed(1)}</InfoDescription>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Release Date</InfoTitle>
              <InfoDescription>{movie?.release_date}</InfoDescription>
            </InfoContainer>

          </HView>
          <VSeparator />
          <View>
            <CastText>Cast:</CastText>
            <HView center style={{flexWrap: 'wrap'}}>
              {credits.slice(0, 6).map((actor) => (
                <React.Fragment key={actor.id}>
                  <InfoDescription>{actor.name}</InfoDescription>
                  <HSeparator />
                </React.Fragment>
              ))}
            </HView>
          </View>
          <VSeparator />
        </InfoWrapper>

      </Container>
    </ScrollView>
  );
};