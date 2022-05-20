import styled from "styled-components";

import { useCloudAccounts } from "../../hooks/useCloudAccounts";

import { Header } from "../../components/Header";
import { Stats } from "../../components/Stats";
import { CloudAccountCharts } from "../../components/CloudAccountCharts";

const Wrapper = styled.div`
  display: flex;
  max-width: 100vh;
  max-width: 100vw;
  overflow: hidden;
  flex-direction: column;
`;

export const Home = () => {
  const cloudAccountsHookResults = useCloudAccounts();
  const { cloudAccounts, selectedCloudAccount, selectCloudAccount } =
    cloudAccountsHookResults;

  return (
    <Wrapper>
      <Header
        isLoading={cloudAccountsHookResults.isLoading}
        cloudAccounts={cloudAccounts}
        selectedCloudAccount={selectedCloudAccount}
        selectCloudAccount={selectCloudAccount}
      />
      <Stats selectedCloudAccount={selectedCloudAccount} />

      <CloudAccountCharts selectedCloudAccount={selectedCloudAccount} />
    </Wrapper>
  );
};
export default Home;
