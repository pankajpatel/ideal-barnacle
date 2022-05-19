import Select, { OnChangeValue } from "react-select";
import { ReactNode, useContext } from "react";
import { LocaleContext } from "../contexts/Locale";

interface LocaleOption {
  label: ReactNode;
  value: Locale;
}

export const LocaleSelector = () => {
  const { locale, setLocale } = useContext(LocaleContext);
  const options: LocaleOption[] = [
    { value: "en", label: "English 🇬🇧" },
    { value: "fr", label: "Français 🇫🇷" },
  ];
  return (
    <Select
      value={options.find((i) => i.value === locale)}
      onChange={(e: OnChangeValue<LocaleOption, false>) => {
        e?.value && setLocale(e.value);
      }}
      options={options}
    />
  );
};
