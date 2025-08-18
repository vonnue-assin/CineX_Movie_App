import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

type ToggleFavoriteTVShowsParams = {
  userId: number;
  id: number;
  isFavorite: boolean;
};

export const useToggleFavoriteMovies = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.USER_LIST],
    mutationFn: async ({ id, isFavorite }: ToggleFavoriteTVShowsParams) => {
      const { data } = await httpClient.post(
        endPoints.toggleFavorites(),
        {
          media_type: 'tv',
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
        queryKey: [DataQueryKeys.FAVORITE_LISTS],
      });
    },
  });
};
