import { useQuery } from '@tanstack/react-query';

import { TopMovie, TopMovieAPIResponse } from '../../types/TopRatedMovies';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const useGetTopRatedMovies = () => {
  return useQuery<TopMovieAPIResponse>({
    queryKey: [DataQueryKeys.TOP_MOVIE_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get<TopMovieResponse>(
        endPoints.getTrendingMoviesList(),
      );
      return data.results;
    },
  });
};
