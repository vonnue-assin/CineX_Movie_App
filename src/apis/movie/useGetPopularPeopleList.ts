import { useQuery } from '@tanstack/react-query';

import { APIResponse } from '../../types/PopularPeople';
import httpClient from './httpClient';
import { endPoints } from './endPoints';
import { DataQueryKeys } from './data-query-keys';

export const useGetPopularPeopleList= () => {
  return useQuery({
    queryKey: [DataQueryKeys.POPULAR_PEOPLE_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get<APIResponse>(
        endPoints.getPopularPeopleList(),
      );
      return data.results;
    },
  });
};
