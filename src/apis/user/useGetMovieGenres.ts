import { useQuery } from '@tanstack/react-query';

import { DataQueryKeys } from './data-query-keys';
import { MovieGenre } from '../../types/MovieGenres';
import httpClient from './httpClient';
import { endPoints } from './endPoints';

export const useGetMovieGenres = () => {
  return useQuery<MovieGenre[]>({
    queryKey: [DataQueryKeys.MOVIE_GENRES_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get(endPoints.getMovieGeneresList());

      return data.genres;
    },
  });
};
