import { useQuery } from '@tanstack/react-query';

import { DataQueryKeys } from '../data-query-keys';
import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { TmdbUserAccount } from '../../types/user';

export const useGetUserDetails = () => {
  return useQuery<TmdbUserAccount[]>({
    queryKey: [DataQueryKeys.USER_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get(endPoints.getUserList());

      return data.results ?? [];
    },
  });
};
