import { useQuery } from '@tanstack/react-query';

import { TVShow } from '../../types/TVShow';
import { DataQueryKeys } from '../data-query-keys';
import { endPoints } from '../endPoints';
import httpClient from '../httpClient';

export const useGetTVLists = () => {
  return useQuery({
    queryKey: [DataQueryKeys.TV_LISTS],
    queryFn: async () => {
      const { data } = await httpClient.get<TVShow>(endPoints.getAllTVList());

      return data.results;
    },
  });
};
