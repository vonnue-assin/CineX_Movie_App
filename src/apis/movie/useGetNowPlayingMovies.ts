import { useQuery } from '@tanstack/react-query';

import {
  NowPlayingMovieResponse,
  NowPlayingMovies,
} from '../../types/NowPlayingMovies';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';

const snakeCaseToCamelCase = (s: string) => {
  return s.replace(/([-_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const convertKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(v => convertKeysToCamelCase(v));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
      acc[snakeCaseToCamelCase(key)] = convertKeysToCamelCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
};

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
