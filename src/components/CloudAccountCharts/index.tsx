import styled from "styled-components";
import { useCloudAccountHistory } from "../../hooks/useCloudAccountHistory";

import { CloudAccountMonthlyComparison } from "./CloudAccountMonthlyComparison";
import { CurrentSpendByService } from "./CurrentSpendByService";
import { Spinner } from "../../ds/components/Spinner";
import { Code } from "../../ds/components/Code";

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

export const CloudAccountCharts = ({
  selectedCloudAccount,
}: {
  selectedCloudAccount: CloudAccountID | null;
}): JSX.Element => {
  const accountHistory = useCloudAccountHistory(selectedCloudAccount);

  if (accountHistory.isLoading) {
    return <Spinner />;
  }

  if (!selectedCloudAccount) {
    return (
      <>
        Can not show historical data for <Code>{selectedCloudAccount}</Code>
      </>
    );
  }

  return (
    <ChartContainer>
      <div>
        <h4>Last 6 Months spent by service</h4>

        <CloudAccountMonthlyComparison data={accountHistory.data} />
      </div>
      <div>
        <h4>Spent by service</h4>

        <CurrentSpendByService
          data={accountHistory?.data?.[accountHistory?.data?.length - 1]}
        />
      </div>
    </ChartContainer>
  );
};
