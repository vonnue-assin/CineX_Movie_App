import { useQuery } from '@tanstack/react-query';

import { NowPlayingMovieResponse } from '../../types/NowPlayingMovies';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const useGetNowPlayingMovies = () => {
  return useQuery({
    queryKey: [DataQueryKeys.NOW_PLAYING_MOVIE_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get<NowPlayingMovieResponse>(
        endPoints.getNowPlayingMovies(),
      );

      return data.results;
    },
  });
};
