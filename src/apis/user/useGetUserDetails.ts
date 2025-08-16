import { useQuery } from '@tanstack/react-query';

import { TmdbUserAccount } from '../../types/user';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const useGetUserDetails = () => {
  return useQuery<TmdbUserAccount[]>({
    queryKey: [DataQueryKeys.USER_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get(endPoints.getUserList());

      return Array.isArray(data) ? data : [data];
    },
  });
};
