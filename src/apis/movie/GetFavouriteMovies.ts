import { useQuery } from '@tanstack/react-query';

import { APIResponse } from '../../types/FavoriteMovies';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const GetFavouriteMovies = () => {
  return useQuery({
    queryKey: [DataQueryKeys.FAVOURITE_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get<APIResponse>(
        endPoints.GetFavouriteMovies(),
      );

      return data.results;
    },
  });
};
