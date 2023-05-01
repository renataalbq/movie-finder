import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { HSeparator, HView, HViewItem, VSeparator } from '../../components/layout/layout';
import { getCastingMovie, getDetailMovie } from '../../services/api';
import { handleShare } from '../../utils/share-function';
import { FavoriteButton } from '../../components/favorite/favorite-button.component';
import { ButtonsContainer, CastText, Container, InfoDescription, InfoTitle, InfoWrapper, Overview,Poster, Title, TitleContent } from './detail-movie.style';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/header/header';

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
  const navigation = useNavigation();

  useEffect(() => {
    getDetailMovie(route.params?.id, setMovie, setIsLoading)
  }, []);

  useEffect(() => {
    getCastingMovie(route.params?.id, setCredits)
  }, []);

  const handleGoBack = () => {
    navigation.goBack()
  }

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Header title="Movie Detail" back onBackButton={handleGoBack} />
      <Container>
        <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} />

        <InfoWrapper>  
          <TitleContent>
            <Title>{movie?.title}</Title>
            <ButtonsContainer>
              <TouchableOpacity onPress={() => handleShare(movie)}>
                <MaterialIcons name='share' size={24} color="#ffffff" />
              </TouchableOpacity>
              <FavoriteButton movie={movie} />
            </ButtonsContainer>
          </TitleContent>

          <Overview>{movie?.overview}</Overview>
          <VSeparator />

          <HView>
            <HViewItem hAlign='center'>
              <InfoTitle>Duration</InfoTitle>
              <InfoDescription>{movie?.runtime} minutes</InfoDescription>
            </HViewItem>

            <HViewItem hAlign='center'>
              <InfoTitle>Rating</InfoTitle>
              <InfoDescription>{movie?.vote_average.toFixed(1)}</InfoDescription>
            </HViewItem>

            <HViewItem hAlign='center'>
              <InfoTitle>Release Date</InfoTitle>
              <InfoDescription>{movie?.release_date}</InfoDescription>
            </HViewItem>

          </HView>
          <VSeparator />
          <View>
            <CastText>Cast</CastText>
            <HView style={{flexWrap: 'wrap'}}>
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