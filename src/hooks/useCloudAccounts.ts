import { useQuery, UseQueryResult } from "react-query";

import { useEffect, useState } from "react";
import { get } from "../api";

interface UseCloudAccounts {
  cloudAccounts: CloudAccounts;
  selectedCloudAccount: CloudAccountID | null;
  selectCloudAccount: (cloudAccountId: CloudAccountID) => void;
}

export const useCloudAccounts = (): UseCloudAccounts &
  UseQueryResult<CloudAccounts> => {
  const [cloudAccounts, setCloudAccounts] = useState<CloudAccounts>();
  const [selectedCloudAccount, selectCloudAccount] =
    useState<CloudAccountID | null>(null);

  const queryResult = useQuery<CloudAccounts, unknown>(
    "cloudAccounts",
    () => get("/accounts"),
    {
      enabled: true,
      retry: false,
      refetchOnMount: false,
    }
  );

  const { data } = queryResult;

  useEffect(() => {
    if (data) {
      setCloudAccounts(data);
      if (!selectedCloudAccount) {
        selectCloudAccount(data[0].id);
      }
    }
  }, [data, selectedCloudAccount]);

  return {
    ...queryResult,
    cloudAccounts: cloudAccounts || [],
    selectedCloudAccount,
    selectCloudAccount,
  };
};
