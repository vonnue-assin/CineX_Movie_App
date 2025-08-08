import { useQuery } from '@tanstack/react-query';

import { TopMovieResponse } from '../../types/TopRatedMovies';
import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

export const useGetTopRatedMovies = () => {
  return useQuery({
    queryKey: [DataQueryKeys.TOP_MOVIE_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get<TopMovieResponse>(
        endPoints.getTrendingMoviesList(),
      );
      return data.results;
    },
  });
};
