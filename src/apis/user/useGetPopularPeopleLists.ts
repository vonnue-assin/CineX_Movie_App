import { useQuery } from '@tanstack/react-query';

import { APIResponse, RawAPIResponse } from '../../types/PopularPeople';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';
import { convertKeysToCamelCase } from '../../components/ConvertKeysToCamelCase';

export const useGetPopularPeopleList = () => {
  return useQuery<APIResponse>({
    queryKey: [DataQueryKeys.POPULAR_PEOPLE_LIST],
    queryFn: async () => {
      const { data }: { data: RawAPIResponse } =
        await endPoints.getPopularPeopleList({
          params: {
            page: 1,
          },
        });
      const rawData: RawAPIResponse = data;

      const camelCaseData: APIResponse = convertKeysToCamelCase(rawData);
      return camelCaseData;
    },
  });
};
