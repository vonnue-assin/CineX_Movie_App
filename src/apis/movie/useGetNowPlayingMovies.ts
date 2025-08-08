import { useQuery } from '@tanstack/react-query';

import { NowPlayingMovieResponse } from '../../types/NowPlayingMovies';
import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

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
