import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

type ToggleFavoritesMoviesParams = {
  userId: number;
  id: number;
  isFavorite: boolean;
};

export const useToggleFavoriteMovies = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.USER_LIST],
    mutationFn: async ({ id, isFavorite }: ToggleFavoritesMoviesParams) => {
      const { data } = await httpClient.post(
        endPoints.toggleFavoriteMovies(),
        {
          media_type: 'movie',
          media_id: id,
          favorite: isFavorite,
        },
        {
          params: {
            sort_by: 'popularity.desc',
          },
        },
      );

      return data;
    },
    onSuccess: _data => {
      queryClient.invalidateQueries({
        queryKey: [DataQueryKeys.FAVOURITE_LIST],
      });
    },
  });
};
