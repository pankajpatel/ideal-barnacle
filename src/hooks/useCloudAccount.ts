import { useQuery, UseQueryResult } from "react-query";

import { useEffect, useState } from "react";
import { get } from "../api";

interface UseCloudAccount {
  cloudAccount?: CloudAccountStats;
}

export const useCloudAccount = (
  cloudAccountId?: CloudAccountID | null
): UseCloudAccount & UseQueryResult<CloudAccountStats> => {
  const [cloudAccount, setCloudAccount] = useState<
    CloudAccountStats | undefined
  >();
  const queryResult = useQuery<CloudAccountStats, unknown>(
    ["cloudAccount", cloudAccountId],
    () => get(`/accounts/${cloudAccountId}`),
    {
      enabled: Boolean(cloudAccountId),
      retry: false,
      refetchOnMount: false,
    }
  );
  const { data } = queryResult;

  useEffect(() => {
    data && setCloudAccount(data);
  }, [data]);

  return { ...queryResult, cloudAccount };
};
