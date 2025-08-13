import { useQuery } from '@tanstack/react-query';

import { MovieGenre } from '../../types/MovieGenres';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const useGetMovieGenres = () => {
  return useQuery<MovieGenre[]>({
    queryKey: [DataQueryKeys.MOVIE_GENRES_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get(endPoints.getMovieGeneresList());

      return data.genres;
    },
  });
};
