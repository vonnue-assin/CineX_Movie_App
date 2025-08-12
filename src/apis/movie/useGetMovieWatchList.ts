import { useQuery } from '@tanstack/react-query';

import { WatchListMovieResponse } from '../../types/WatchList';
import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

export const useGetMovieWatchList = () => {
  return useQuery({
    queryKey: [DataQueryKeys.WATCHLIST_MOVIE],
    queryFn: async () => {
      const { data } = await httpClient.get<WatchListMovieResponse>(
        endPoints.getWatchListMovies(),
      );
      return data.results;
    },
  });
};
