import { useQuery } from '@tanstack/react-query';

import { DataQueryKeys } from './data-query-keys';
import { MovieListAPIResponse } from '../../types/MovieList';
import httpClient from './httpClient';
import { endPoints } from './endPoints';

export const useGetMovieList = () => {
  return useQuery<MovieListAPIResponse[]>({
    queryKey: [DataQueryKeys.MOVIE_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get(endPoints.getMovieList());

      return data.list;
    },
  });
};
