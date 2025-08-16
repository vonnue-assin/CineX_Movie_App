import { useQuery } from '@tanstack/react-query';

import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';
import {
  TopRatedMovieAPIResponse,
  TopRatedMovieResponse,
} from '../../types/TopRatedMovies';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';

export const useGetTopRatedMovies = () => {
  return useQuery<TopRatedMovieResponse, Error>({
    queryKey: [DataQueryKeys.TOP_MOVIE_LIST],
    queryFn: async () => {
      const { data }: { data: TopRatedMovieAPIResponse } =
        await endPoints.getTrendingMoviesList({
          params: {
            page: 1,
          },
        });

      const camelCaseData: TopRatedMovieResponse = convertKeysToCamelCase(data);
      return camelCaseData;
    },
  });
};
