import React, { useContext } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { FavoriteButton } from '../../components/favorite/favorite-button.component';
import { useNavigation } from '@react-navigation/native';
import { PosterMovie } from '../../components/poster-movie/poster-movie';
import { Placeholder, Title } from './favorite-movie.style';
import { FavoritesContext } from '../../store/fav-context';
import { Header } from '../../components/header/header';
import { Container, VSeparator, VView } from '../../components/layout/layout';

export const FavoriteMovie = () => {
  const navigation = useNavigation();
  const { favorites } = useContext(FavoritesContext);

  const handleMovieDetail = (id: number, title: string) => {
    navigation.navigate('MovieDetail', {id: id, title: title})
  }

  return (
    <Container>
      <Header title={'My favorite movies'} />
      {favorites.length > 0 ? (
        <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={favorites}
        keyExtractor={item => String(item?.id)}
        renderItem={ ({item}) => (
          <View style={{display: 'flex'}}>
            <PosterMovie 
                img={item.poster_path}
                onPress={() => handleMovieDetail(item.id, item.title)}
            />
            <View style={{paddingLeft: 10, marginBottom: 10}}>
              <FavoriteButton movie={item} />
            </View>
          </View>
      ) }
      />
      ) : (
        <VView>
          <VSeparator />
          <Placeholder>You have no favorite movies yet.</Placeholder>
        </VView>
      )}
    </Container>
  );
};

