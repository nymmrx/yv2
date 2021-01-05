import React, { StrictMode } from "react";
import Head from "next/head";

import type { AppProps } from "next/app";

import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "@utils/getLibrary";

import { StoreProvider } from "@state/provider";

import "../styles/globals.scss";

import { configure } from "mobx";

import ThemeProvider from "@comp/provider/ThemeProvider";
import Confetti from "@comp/ui/Confetti";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

export default function YearnApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>yearn.finance</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <StrictMode>
        <StoreProvider>
          <ThemeProvider>
            <Web3ReactProvider getLibrary={getLibrary}>
              <Component {...pageProps} />
            </Web3ReactProvider>
          </ThemeProvider>
        </StoreProvider>
      </StrictMode>
    </>
  );
}
