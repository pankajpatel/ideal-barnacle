import styled from "styled-components";
import { CloudAccountSelector } from "../components/CloudAccountsSelector";
import { LocaleSelector } from "./LocaleSelector";
import { Header as DSHeader } from "../ds/components/Header";

const StyledHeader = styled(DSHeader)`
  display: grid;
  grid-template-columns: 1fr 150px;
  padding: 0.5rem;
`;

interface HeaderProps {
  isLoading: boolean;
  cloudAccounts: CloudAccounts;
  selectedCloudAccount: CloudAccountID | null;
  selectCloudAccount: (account: CloudAccountID) => void;
}

export const Header = ({
  isLoading,
  cloudAccounts,
  selectedCloudAccount,
  selectCloudAccount,
}: HeaderProps): JSX.Element => (
  <StyledHeader>
    <CloudAccountSelector
      isLoading={isLoading}
      cloudAccounts={cloudAccounts}
      selectedAccount={selectedCloudAccount}
      onChange={selectCloudAccount}
    />
    <LocaleSelector />
  </StyledHeader>
);
