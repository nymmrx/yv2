import signale from "signale";

import { JsonRpcProvider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { MaxUint256 } from "@ethersproject/constants";
import erc20 from "@studydefi/money-legos/erc20";

import {
  parseEther,
  parseUnits,
  formatEther,
  formatUnits,
} from "@ethersproject/units";

import { Address } from "./settings";
import { uniswap } from "./consts";

const log = new signale.Signale({
  types: {
    info: {
      badge: "🔼",
      color: "blue",
      label: "info",
    },
    swap: {
      badge: "🔀",
      color: "yellow",
      label: "swap",
    },
    wrap: {
      badge: "🎁",
      color: "magenta",
      label: "wrap",
    },
  },
});

async function main() {
  log.info("Generating tokens for", Address);

  const provider = new JsonRpcProvider();
  const signer = provider.getSigner(Address);

  const { weth, dai } = erc20;

  const WETH = new Contract(weth.address, weth.abi, signer);
  const DAI = new Contract(dai.address, dai.abi, signer);

  await WETH.approve(uniswap.address, MaxUint256);

  async function portfolio() {
    return {
      eth: await signer.getBalance(),
      weth: await WETH.balanceOf(Address),
      dai: await DAI.balanceOf(Address),
    };
  }

  let balance = await portfolio();

  log.info("ETH balance:", formatEther(balance.eth));

  const Uniswap = new Contract(uniswap.address, uniswap.abi, signer);

  const wethThreshold = parseEther("5");
  if (balance.eth.gt(balance.weth)) {
    if (balance.eth.lt(wethThreshold)) {
      log.fatal("Your eth balance is < 5. Restart the testchain...");
      process.exit(1);
    }

    const toWrap = balance.eth.sub(wethThreshold);
    await WETH.deposit({ value: toWrap });
    balance = await portfolio();
    log.wrap("ETH -> wETH", formatEther(balance.weth));
  }

  log.info("wETH balance:", formatEther(balance.weth));

  const daiThreshold = parseUnits("10000", dai.decimals);
  if (balance.dai.lt(daiThreshold)) {
    const wethT = parseUnits("15", weth.decimals);
    const deadline = (await provider.getBlock("latest")).timestamp + 1200;
    const res = await Uniswap.swapExactTokensForTokens(
      wethT,
      0,
      [weth.address, dai.address],
      Address,
      deadline
    );
    balance = await portfolio();
    log.swap("wETH -> DAI", formatUnits(balance.dai.toString(), dai.decimals));
  }

  log.info("DAI balance:", formatUnits(balance.dai.toString(), dai.decimals));
}

main();
