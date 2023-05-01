import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Genres } from '../../components/genres/genres';
import { Header } from '../../components/header/header';
import { PosterMovie } from '../../components/poster-movie/poster-movie';
import { Search } from '../../components/search/search';
import { Movie } from '../../models/movie.model';
import { filterByGenre, getMovies } from '../../services/api';
import { searchFilter } from '../../utils/search-function';
import { SearchContainer, SearchIcon} from './home.style';

export const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [moviesSearched, setMoviesSearched] = useState<Movie[]>([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    getMovies(setGenres)
  }, []);

  useEffect(() => {
    filterByGenre(selectedGenreId, setMovies, setMoviesSearched)
  }, [selectedGenreId]);

  const handleMovieDetail = (id: number, title: string) => {
    navigation.navigate('MovieDetail', {id: id, title: title})
  }

  const handleGenreSelected = (genreId: any) => {
    setSelectedGenreId(genreId);
  }

  return (
      <SafeAreaView>
        <Header title={'MovieFinder'} />
          <SearchContainer>
            <SearchIcon>
              <Feather name="search" size={20} color="#dddddd" />
            </SearchIcon>
            <Search
                onChangeText={(text: string) => searchFilter(text, movies, setMoviesSearched, setSearch)}
                value={search}
                placeholder="Search"
              />
            
          </SearchContainer>
        
        <Genres genres={genres} onGenreSelected={handleGenreSelected} selectedGenre={selectedGenreId} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={moviesSearched}
          keyExtractor={item => String(item.id)}
          renderItem={ ({item}) => (
            <PosterMovie 
                img={item.poster_path}
                onPress={() => handleMovieDetail(item.id, item.title)}
            />
        ) }
          numColumns={2}
        />
      </SafeAreaView>
    );
};