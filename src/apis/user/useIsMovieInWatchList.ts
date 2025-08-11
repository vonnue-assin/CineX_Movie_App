import { useQuery } from '@tanstack/react-query';
import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

export const useIsMovieInWatchList = (userId: number, movieId: number) => {
  return useQuery<boolean>({
    queryKey: [DataQueryKeys.WATCHLIST_STATUS, userId, movieId],
    queryFn: async () => {
      const { data } = await httpClient.get(
        endPoints.isMovieInWatchList(userId, movieId),
      );
      return data?.isInWatchlist ?? false;
    },
    staleTime: 0, 
  });
};
