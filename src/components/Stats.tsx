import { FormattedNumber } from "react-intl";
import styled from "styled-components";
import { Spinner } from "../ds/components/Spinner";
import { useCloudAccount } from "../hooks/useCloudAccount";

interface StatsProps {
  selectedCloudAccount: CloudAccountID | null;
}

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 0.5rem;
`;

const Stat = styled.div`
  border: 1px solid #ccc;
  padding: 2rem 1rem;
  line-height: 1;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StatTitle = styled.h3`
  font-size: 2rem;
  margin: 0;
  padding: 0;
  line-height: 1;
`;
const StatValue = styled.span`
  font-weight: 700;
  font-size: 2.8rem;
`;

export const Stats = ({ selectedCloudAccount }: StatsProps): JSX.Element => {
  const { isLoading, cloudAccount } = useCloudAccount(selectedCloudAccount);

  if (isLoading) {
    return <Spinner />;
  }

  if (!cloudAccount) {
    return <div>There was some problem with loading the account stats</div>;
  }

  return (
    <StatsWrapper>
      <Stat>
        <StatTitle>Bills</StatTitle>
        <StatValue>
          <FormattedNumber
            // eslint-disable-next-line react/style-prop-object
            style="currency"
            currency="EUR"
            value={cloudAccount?.bill}
            currencyDisplay="symbol"
          />
        </StatValue>
      </Stat>
      <Stat>
        <StatTitle>Servers</StatTitle>
        <StatValue>{cloudAccount?.servers}</StatValue>
      </Stat>
      <Stat>
        <StatTitle>Regions</StatTitle>
        <StatValue>{cloudAccount?.regions}</StatValue>
      </Stat>
      <Stat>
        <StatTitle>Alarms</StatTitle>
        <StatValue>{cloudAccount?.alarms}</StatValue>
      </Stat>
    </StatsWrapper>
  );
};
