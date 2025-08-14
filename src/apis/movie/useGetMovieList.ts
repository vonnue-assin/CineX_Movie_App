import { useQuery } from '@tanstack/react-query';

import {
  NowPlayingMovieResponse,
  NowPlayingMovies,
} from '../../types/MovieList';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';

export const useGetMovieList = () => {
  return useQuery<NowPlayingMovies>({
    queryKey: [DataQueryKeys.MOVIE_LIST],
    queryFn: async () => {
      const { data }: { data: NowPlayingMovieResponse } =
        await endPoints.getMovieList({
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
