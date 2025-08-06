import { useQuery } from '@tanstack/react-query';
import { DataQueryKeys } from './data-query-keys';
import { APIResponse } from '../../types/MovieList';
import httpClient from './httpClient';
import { endPoints } from './endPoints';

export const useGetMovieList = () => {
  return useQuery({
    queryKey: [DataQueryKeys.MOVIE_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get<APIResponse>(
        endPoints.getMovieList(),
      );
      return data.results;
    },
  });
};
