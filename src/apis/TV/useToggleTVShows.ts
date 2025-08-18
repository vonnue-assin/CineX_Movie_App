import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

type ToggleWatchlistsMoviesParams = {
  userId: number;
  id: number;
  isWatchlist: boolean;
};

export const useToggleTVShows = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.TVSHOWS_WATCHLISTS],
    mutationFn: async ({ id, isWatchlist }: ToggleWatchlistsMoviesParams) => {
      const { data } = await httpClient.post(
        endPoints.toggleWatchListTvShows(),
        {
          media_type: 'tv',
          media_id: id,
          watchlist: isWatchlist,
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
