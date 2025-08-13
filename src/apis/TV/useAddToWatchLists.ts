import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

type AddToWatchListParams = {
  userId: number;
  id: number;
};

export const useAddToWatchLists = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.TVSHOWS_WATCHLISTS],
    mutationFn: async ({ userId, id }: AddToWatchListParams) => {
      const { data } = await httpClient.post(
        endPoints.addTvShowsToWatchLists(userId),
        {
          media_type: 'tv',
          media_id: id,
          watchlist: true,
        },
      );
      return data;
    },
    onSuccess: _data => {
      queryClient.invalidateQueries({
        queryKey: [DataQueryKeys.TVSHOWS_WATCHLISTS],
      });
    },
  });
};
