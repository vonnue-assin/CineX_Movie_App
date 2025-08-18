import { useQuery } from '@tanstack/react-query';

import {
  NowPlayingMovieResponse,
  NowPlayingMovies,
} from '../../types/MovieList';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';

export const GetFavouriteMovies = () => {
  return useQuery<NowPlayingMovies>({
    queryKey: [DataQueryKeys.FAVOURITE_LIST],
    queryFn: async () => {
      const { data }: { data: NowPlayingMovieResponse } =
        await endPoints.getFavouriteMovies({
          params: {
            sort_by: 'popularity.desc',
          },
        });
      const camelCaseData: NowPlayingMovies = convertKeysToCamelCase(data);
      return camelCaseData;
    },
  });
};
