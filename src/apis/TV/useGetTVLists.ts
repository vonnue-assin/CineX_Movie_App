import { useQuery } from '@tanstack/react-query';

import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';
import { NowPlayingMovies, TVShow } from '../../types/TVShow';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';

export const useGetTVLists = () => {
  return useQuery<NowPlayingMovies>({
    queryKey: [DataQueryKeys.TV_LISTS],
    queryFn: async () => {
      const { data }: { data: TVShow } = await endPoints.getAllTVList({
        params: {
          page: 1,
          include_adult: false,
          include_video: false,
          sort_by: 'popularity.desc',
        },
      });
      const camelCaseData: NowPlayingMovies = convertKeysToCamelCase(data);
      return camelCaseData;
    },
  });
};
