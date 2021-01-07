import log from "signale";

import { Fetcher, TokenAmount } from "@uniswap/sdk";

import { JsonRpcProvider } from "@ethersproject/providers";

import { Address } from "./settings";
import { DaiAddress, WethAddress, ChainID } from "./consts";

async function main() {
  log.info("Generating tokens for", Address);

  const provider = new JsonRpcProvider();
  const signer = provider.getSigner(Address);

  log.info("ETH balance:", (await signer.getBalance()).toString());

  const WETH = await Fetcher.fetchTokenData(
    ChainID,
    WethAddress,
    provider,
    "WETH"
  );
  const DAI = await Fetcher.fetchTokenData(
    ChainID,
    DaiAddress,
    provider,
    "DAI"
  );

  const WETH_DAI = await Fetcher.fetchPairData(WETH, DAI, provider);

  const [amount] = WETH_DAI.getOutputAmount(new TokenAmount(WETH, "100"));
  console.log(amount.toExact());
}

main();
