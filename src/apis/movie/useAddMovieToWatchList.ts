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
    mutationFn: async ({ userId, id }: AddToWishlistParams) => {
      const { data } = await httpClient.post(endPoints.getUserId(userId), {
        media_type: 'movie',
        media_id: id,
        watchlist: true,
      });

      return data;
    },
    onSuccess: (_data, { userId, id }) => {
      queryClient.invalidateQueries({
        queryKey: [DataQueryKeys.WATCHLIST_STATUS, userId, id],
      });
    },
  });
};
