import { useQuery } from '@tanstack/react-query';

import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';
import {
  NowPlayingMovieResponse,
  NowPlayingMovies,
} from '../../types/NowPlayingMovies';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';

export const useGetWatchListMovies = () => {
  return useQuery<NowPlayingMovies>({
    queryKey: [DataQueryKeys.WATCHLIST_MOVIES],
    queryFn: async () => {
      const { data }: { data: NowPlayingMovieResponse } =
        await endPoints.getWatchListsMovies({
          params: {
            sort_by: 'popularity.desc',
          },
        });
      const camelCaseData: NowPlayingMovies = convertKeysToCamelCase(data);

      return camelCaseData;
    },
  });
};
