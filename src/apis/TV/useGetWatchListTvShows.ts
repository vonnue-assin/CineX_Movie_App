import { useQuery } from '@tanstack/react-query';

import { TVShow } from '../../types/TVShow';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const useGetWatchListMovies = () => {
  return useQuery({
    queryKey: [DataQueryKeys.TVSHOWS_WATCHLISTS],
    queryFn: async () => {
      const { data } = await httpClient.get<TVShow>(
        endPoints.getWatchListTvShows(),
      );
      return data.results;
    },
  });
};
