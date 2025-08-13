import { useQuery } from '@tanstack/react-query';

import { APIResponse } from '../../types/MovieList';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

export const useGetMovieList = () => {
  return useQuery({
    queryKey: [DataQueryKeys.MOVIE_LIST],
    queryFn: async () => {
      const { data }: { data: APIResponse } = await endPoints.getMovieList({
        params: {
          language: 'en-US',
          page: 1,
          include_adult: false,
          include_video: false,
          sort_by: 'popularity.desc',
        },
      });

      return data.results;
    },
  });
};
