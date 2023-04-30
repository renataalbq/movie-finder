import { API_KEY_TMDB } from "@env";

export const base_URL = 'https://api.themoviedb.org/3';

export const getMovies = (setGenres: any) => {
    fetch(`${base_URL}/genre/movie/list?api_key=${API_KEY_TMDB}`)
        .then(response => response.json())
        .then(data => {
          setGenres(data.genres);
        })
        .catch(error => {
        console.error(error);
    });
}

export const filterByGenre = (selectedGenreId: any, setMovies: any, setMoviesSearched: any) => {
    let url = `${base_URL}/discover/movie?api_key=${API_KEY_TMDB}`;
    if (selectedGenreId) {
        url += `&with_genres=${selectedGenreId}`;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
          setMoviesSearched(data.results)
        })
        .catch(error => {
          console.error(error);
    });
}

export const getDetailMovie = (id: number, setMovie: any, setIsLoading: any) => {
    fetch(`${base_URL}/movie/${id}?api_key=${API_KEY_TMDB}`)
      .then(response => response.json())
      .then(movie => {
        setMovie(movie);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
}

export const getCastingMovie = (id: number, setCredits: any) => {
  fetch(`${base_URL}/movie/${id}/credits?api_key=${API_KEY_TMDB}`)
    .then(response => response.json())
    .then(movie => {
      setCredits(movie.cast);
    })
    .catch(error => {
      console.error(error);
    });
}