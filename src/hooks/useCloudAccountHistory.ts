import { useQuery, UseQueryResult } from "react-query";

import { useEffect, useState } from "react";
import { get } from "../api";

interface UseCloudAccountHistory {
  cloudAccountHistory?: CloudAccountHistory[];
}

export const useCloudAccountHistory = (
  cloudAccountId?: CloudAccountID | null
): UseCloudAccountHistory & UseQueryResult<CloudAccountHistory[]> => {
  const [cloudAccountHistory, setCloudAccountHistory] = useState<
    CloudAccountHistory[] | undefined
  >();
  const queryResult = useQuery<CloudAccountHistory[], unknown>(
    ["cloudAccountHistory", cloudAccountId],
    () => get(`/accounts/${cloudAccountId}/history`),
    {
      enabled: Boolean(cloudAccountId),
      retry: false,
      refetchOnMount: false,
    }
  );
  const { data } = queryResult;

  useEffect(() => {
    data && setCloudAccountHistory(data);
  }, [data]);

  return { ...queryResult, cloudAccountHistory };
};
