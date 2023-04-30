import { Alert } from 'react-native';
import { Share } from 'react-native';
import { Movie } from '../models/movie.model';

export const handleShare = async (movie: Movie) => {
    try {
      await Share.share({
        message: `Check out this amazing movie: ${movie?.title}\n${movie?.overview}`,
      });
    } catch (error) {
      console.log(error);
    }
  };
