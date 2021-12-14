import { useState } from 'react';
import { api, API_PATHS } from '@/utils/apis';
import { useRequest } from '@umijs/hooks';

export type TabType = 'offers' | 'history';

const useOffersAndHistory = (id: string) => {
  const [tab, setTab] = useState<TabType>('offers');

  const request = useRequest(
    () => {
      if (tab === 'offers') {
        return api.get(API_PATHS.GET_OFFERS(id));
      } else {
        return api.get(API_PATHS.GET_SALES_HISTORY(id));
      }
    },
    {
      refreshDeps: [id, tab],
    },
  );

  return {
    request,
    tab,
    setTab,
  };
};

export default useOffersAndHistory;
