import { ReactNode } from "react";
import Select, { OnChangeValue } from "react-select";
import styled from "styled-components";
import { Code } from "../ds/components/Code";

interface AccountOption {
  label: ReactNode;
  value: CloudAccountID;
}

const CloudProviderLogo = styled.img`
  max-height: 1.5rem;
  margin-right: 0.5rem;
`;

const OptionLabel = styled.span`
  display: flex;
  align-items: center;
`;

const Option = styled(OptionLabel)`
  justify-content: space-between;
`;

const StyledSelect = styled.div`
  display: inline-block;
  min-width: 250px;
  margin-left: 1rem;
`;

export const CloudAccountSelector = ({
  cloudAccounts,
  selectedAccount,
  onChange,
  isLoading,
}: {
  isLoading: boolean;
  cloudAccounts: CloudAccounts;
  selectedAccount: CloudAccountID | null;
  onChange: (account: CloudAccountID) => void;
}) => {
  const accountOptions = cloudAccounts.map<AccountOption>(
    (account: CloudAccount) => ({
      value: account.id,
      label: (
        <Option>
          <OptionLabel>
            <CloudProviderLogo src={account.logo} alt={account.provider} />
            <span>{account.provider}</span>
          </OptionLabel>
          <small>
            <Code>{account.label}</Code>
          </small>
        </Option>
      ),
    })
  );

  return (
    <div>
      Account{" "}
      <StyledSelect>
        <Select
          isLoading={isLoading}
          value={accountOptions.find((i) => i.value === selectedAccount)}
          onChange={(selectedOption: OnChangeValue<AccountOption, false>) => {
            selectedOption?.value && onChange(selectedOption.value);
          }}
          options={accountOptions}
        />
      </StyledSelect>
    </div>
  );
};
