import { useQuery } from '@tanstack/react-query';

import { APIResponse } from '../../types/FavoriteMovies';
import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

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
