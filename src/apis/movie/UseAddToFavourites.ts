import { useMutation, useQueryClient } from '@tanstack/react-query';

import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

type AddToFavouriteList = {
  userId: number;
  id: number;
};

export const useAddToFavourites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DataQueryKeys.FAVOURITE_MOVIE],
    mutationFn: async ({ id }: AddToFavouriteList) => {
      const { data } = await httpClient.post(
        endPoints.getFavouriteMovies(22198483),
        {
          media_type: 'movie',
          media_id: id,
          favorite: true,
        },
      );
      return data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: [DataQueryKeys.FAVOURITE_MOVIE, variables.userId],
      });
    },
  });
};
