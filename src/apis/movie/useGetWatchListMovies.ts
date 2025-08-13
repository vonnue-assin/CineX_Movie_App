import { useQuery } from '@tanstack/react-query';

import { watchListMovies } from '../../types/NowPlayingMovies';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const useGetWatchListMovies = () => {
  return useQuery({
    queryKey: [DataQueryKeys.WATCHLIST_MOVIES],
    queryFn: async () => {
      const { data } = await httpClient.get<watchListMovies>(
        endPoints.getWatchListMovies(),
      );
      return data.results;
    },
  });
};
