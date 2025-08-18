import { useMutation, useQueryClient } from '@tanstack/react-query';

import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

type AddToFavoritesParams = {
  userId: number;
  id: number;
};

export const useAddMovieToFavourites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.USER_LIST],
    mutationFn: async ({ id }: AddToFavoritesParams) => {
      const { data } = await httpClient.post(
        endPoints.addToFavorites(),
        {
          media_type: 'movie',
          media_id: id,
          favorite: true,
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
