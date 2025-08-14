import { useQuery } from '@tanstack/react-query';

import { APIResponse, RawAPIResponse } from '../../types/PopularPeople';
import { endPoints } from '../endPoints';
import { DataQueryKeys } from '../data-query-keys';

const snakeCaseToCamelCase = (s: string) => {
  return s.replace(/([-_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const convertKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(v => convertKeysToCamelCase(v));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
      acc[snakeCaseToCamelCase(key)] = convertKeysToCamelCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
};

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
