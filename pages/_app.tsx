import React, { StrictMode } from "react";
import Head from "next/head";

import type { AppProps } from "next/app";

import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "@utils/getLibrary";

import { StoreProvider } from "@state/provider";

import "../styles/globals.scss";

import { configure } from "mobx";

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
      </Head>
      <StrictMode>
        <StoreProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Component {...pageProps} />
          </Web3ReactProvider>
        </StoreProvider>
      </StrictMode>
    </>
  );
}
