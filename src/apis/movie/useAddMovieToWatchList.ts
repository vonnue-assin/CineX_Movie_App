import { useMutation, useQueryClient } from '@tanstack/react-query';

import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

type AddToWishlistParams = {
  userId: number;
  id: number;
};

export const useAddToWatchList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.USER_LIST],
    mutationFn: async ({ id }: AddToWishlistParams) => {
      const { data } = await httpClient.post(endPoints.getUserId(22198483), {
        media_type: 'movie',
        media_id: id,
        watchlist: true,
      });

      return data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: [DataQueryKeys.USER_LIST, variables.userId],
      });
    },
  });
};
