import React, { StrictMode } from "react";
import Head from "next/head";

import type { AppProps } from "next/app";

import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "@utils/getLibrary";

import { StoreProvider } from "@state/provider";

import "../styles/globals.scss";

import { configure } from "mobx";

import DarkModeProvider from "@comp/provider/DarkModeProvider";
import GlobalStyles from "@comp/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function YearnApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>yearn.finance</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <StrictMode>
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <Web3ReactProvider getLibrary={getLibrary}>
              <GlobalStyles />
              <DarkModeProvider>
                <Component {...pageProps} />
              </DarkModeProvider>
            </Web3ReactProvider>
          </ThemeProvider>
        </StoreProvider>
      </StrictMode>
    </>
  );
}
