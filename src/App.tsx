import { useState } from "react";
import { IntlProvider, MessageFormatElement } from "react-intl";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { LocaleContext } from "./contexts/Locale";
import { GlobalStyles } from "./GlobalStyles";
import { RoutedPages } from "./pages";
import { queryClient } from "./utils/queryClient";

import localeEN from "./locales/en.json";
import localeFR from "./locales/fr.json";

const LOCALES: Record<
  Locale,
  Record<string, string> | Record<string, MessageFormatElement[]> | undefined
> = {
  en: localeEN,
  fr: localeFR,
};

export const App = () => {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <IntlProvider locale={locale} messages={LOCALES[locale]}>
          <GlobalStyles />
          <RoutedPages />
          <ReactQueryDevtools />
        </IntlProvider>
      </LocaleContext.Provider>
    </QueryClientProvider>
  );
};
