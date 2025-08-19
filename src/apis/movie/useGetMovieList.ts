import { useQuery } from '@tanstack/react-query';
import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';
import { Movie } from '../../types/MovieList';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';

export const useGetMovieList = () => {
  return useQuery<Movie[], Error>({
    queryKey: [DataQueryKeys.MOVIE_LIST],
    queryFn: async () => {
      const { data } = await endPoints.getNowPlayingMovies({
        params: {
          page: 1,
          include_adult: false,
          include_video: false,
          sort_by: 'popularity.desc',
        },
      });

      const camelCaseData: Movie[] = convertKeysToCamelCase(data.results);
      return camelCaseData;
    },
  });
};
