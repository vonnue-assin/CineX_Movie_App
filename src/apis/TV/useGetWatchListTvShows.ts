import { useQuery } from '@tanstack/react-query';

import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';
import { NowPlayingMovies, TVShow } from '../../types/TVShow';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';

export const useGetWatchListTvShows = () => {
  return useQuery<NowPlayingMovies>({
    queryKey: [DataQueryKeys.TVSHOWS_WATCHLISTS],
    queryFn: async () => {
      const { data }: { data: TVShow } = await endPoints.getWatchListsTVShows({
        params: {
          sort_by: 'popularity.desc',
        },
      });

      const camelCaseData: NowPlayingMovies = convertKeysToCamelCase(data);

      return camelCaseData;
    },
  });
};
