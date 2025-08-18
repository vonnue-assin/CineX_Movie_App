import { useQuery } from '@tanstack/react-query';

import { NowPlayingMovies, TVShow } from '../../types/TVShow';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';

export const useGetFavouriteTvShows = () => {
  return useQuery<NowPlayingMovies>({
    queryKey: [DataQueryKeys.FAVORITE_LISTS],
    queryFn: async () => {
      const { data }: { data: TVShow } = await endPoints.getFavouriteTvShows({
        params: {
          sort_by: 'popularity.desc',
        },
      });
      const camelCaseData: NowPlayingMovies = convertKeysToCamelCase(data);
      return camelCaseData;
    },
  });
};
