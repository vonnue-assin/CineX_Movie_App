import { useQuery } from '@tanstack/react-query';

import { TVListAPIResponse } from '../../types/TVLits';
import httpClient from '../httpClient';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

export const useGetTVLists = () => {
  return useQuery({
    queryKey: [DataQueryKeys.TV_LISTS],
    queryFn: async () => {
      const { data } = await httpClient.get<TVListAPIResponse>(
        endPoints.getAllTVList(),
      );

      return data.results;
    },
  });
};
