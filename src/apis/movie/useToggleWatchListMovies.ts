import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

type ToggleWatchlistsMoviesParams = {
  userId: number;
  id: number;
  isWatchable: boolean;
};

export const useToggleWatchListMovies = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.WATCHLIST_MOVIES],
    mutationFn: async ({ id, isWatchable }: ToggleWatchlistsMoviesParams) => {
      const { data } = await httpClient.post(
        endPoints.toggleWatchListMovies(),
        {
          media_type: 'movie',
          media_id: id,
          watchlist: isWatchable,
        },
      );

      return data;
    },
    onSuccess: _data => {
      queryClient.invalidateQueries({
        queryKey: [DataQueryKeys.WATCHLIST_MOVIES],
      });
    },
  });
};
