import React from "react";
import Head from "next/head";

import type { AppProps } from "next/app";

import { Web3ReactProvider } from "@web3-react/core";

import getLibrary from "@utils/getLibrary";

import "../styles/globals.scss";

export default function YearnApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>yearn.finance</title>
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  );
}
