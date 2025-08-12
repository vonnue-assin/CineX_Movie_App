import { useQuery } from '@tanstack/react-query';

import { APIResponse } from '../../types/TVShow';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const useGetFavouriteMovies = () => {
  return useQuery({
    queryKey: [DataQueryKeys.FAVORITE_LISTS],
    queryFn: async () => {
      const { data } = await httpClient.get<APIResponse>(
        endPoints.getAllFavoriteTvShows(),
      );

      return data.results;
    },
  });
};
