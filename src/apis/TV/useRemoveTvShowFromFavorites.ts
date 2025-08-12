import { useMutation, useQueryClient } from '@tanstack/react-query';

import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

type AddToWishlistParams = {
  userId: number;
  id: number;
};

export const useRemoveTvShowFromFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.USER_LIST],
    mutationFn: async ({ id }: AddToWishlistParams) => {
      const { data } = await httpClient.post(
        endPoints.addTvShowsToFavorites(),
        {
          media_type: 'tv',
          media_id: id,
          favorite: false,
        },
      );

      return data;
    },
    onSuccess: _data => {
      queryClient.invalidateQueries({
        queryKey: [DataQueryKeys.FAVORITE_LISTS],
      });
    },
  });
};
