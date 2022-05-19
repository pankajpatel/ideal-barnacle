/// <reference types="react-scripts" />

type CloudAccountID = string;

interface CloudAccount {
  id: CloudAccountID;
  provider: string;
  label: string;
  logo: string;
}

type CloudAccounts = Array<CloudAccount>;

type Locale = "en" | "fr";

interface CloudAccountStats {
  bill: number;
  servers: number;
  regions: number;
  alarms: number;
}

interface SpendGroup {
  key: string;
  amount: number;
}

interface CloudAccountHistory {
  date: string;
  groups: Array<SpendGroup>;
}
