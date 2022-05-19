import styled from "styled-components";

import { useCloudAccount } from "../hooks/useCloudAccount";
import { useCloudAccountHistory } from "../hooks/useCloudAccountHistory";
import { useCloudAccounts } from "../hooks/useCloudAccounts";

import { Spinner } from "../ds/components/Spinner";
import { Header } from "../components/Header";
import { Stats } from "../components/Stats";
import {
  CloudAccountCharts,
  CurrentSpendByService,
} from "../components/CloudAccountCharts";

const Wrapper = styled.div`
  display: flex;
  max-width: 100vh;
  max-width: 100vw;
  overflow: hidden;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0.5rem;

  & > * {
    flex: 1 auto;
  }
`;

export const Home = () => {
  const cloudAccountsHookResults = useCloudAccounts();
  const { cloudAccounts, selectedCloudAccount, selectCloudAccount } =
    cloudAccountsHookResults;

  const cloudAccountHookResults = useCloudAccount(selectedCloudAccount);
  const { cloudAccount } = cloudAccountHookResults;

  const history = useCloudAccountHistory(selectedCloudAccount);

  console.log(history);

  return (
    <Wrapper>
      <Header
        isLoading={cloudAccountsHookResults.isLoading}
        cloudAccounts={cloudAccounts}
        selectedCloudAccount={selectedCloudAccount}
        selectCloudAccount={selectCloudAccount}
      />
      {cloudAccountHookResults.isLoading ? (
        <Spinner />
      ) : (
        <Stats value={cloudAccount} />
      )}
      <ChartContainer>
        <div>
          <h4>Last 6 Months spent by service</h4>

          <CloudAccountCharts data={history.data} />
        </div>
        <div>
          <h4>Spent by service</h4>

          <CurrentSpendByService
            data={history?.data?.[history?.data?.length - 1]}
          />
        </div>
      </ChartContainer>
    </Wrapper>
  );
};
