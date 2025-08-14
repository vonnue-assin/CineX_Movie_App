import { useQuery } from '@tanstack/react-query';

import {
  NowPlayingMovieResponse,
  NowPlayingMovies,
} from '../../types/NowPlayingMovies';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';

export const useGetNowPlayingMovie = () => {
  return useQuery<NowPlayingMovies, Error>({
    queryKey: [DataQueryKeys.NOW_PLAYING_MOVIE_LIST],
    queryFn: async () => {
      const { data }: { data: NowPlayingMovieResponse } =
        await endPoints.getNowPlayingMovies({
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
