import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { DataQueryKeys } from '../data-query-keys';
import { MovieGenre } from '../../types/MovieGenres';
import { endPoints } from '../endPoints';

interface MovieGenresApiResponse {
  genres: MovieGenre[];
}

export const useGetMovieGenres = () => {
  return useQuery<MovieGenre[]>({
    queryKey: [DataQueryKeys.MOVIE_GENRES_LIST],
    queryFn: async () => {
      const { data }: AxiosResponse<MovieGenresApiResponse> =
        await endPoints.getMovieGeneresList({
          params: {
            language: 'en-US',
          },
        });

      return data.genres;
    },
  });
};
