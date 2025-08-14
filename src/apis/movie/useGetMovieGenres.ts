import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { MovieGenre } from '../../types/MovieGenres';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';

type MovieGenreApiResponse = {
  genres: MovieGenre[];
};

export const useGetMovieGenres = () => {
  return useQuery<MovieGenre[]>({
    queryKey: [DataQueryKeys.MOVIE_GENRES_LIST],
    queryFn: async () => {
      const { data }: AxiosResponse<MovieGenreApiResponse> =
        await endPoints.getMovieGeneresList({
          params: {
            language: 'en-US',
          },
        });
      return data.genres;
    },
  });
};
