import React from "react";
import tw, { styled } from "twin.macro";

import { observer } from "mobx-react-lite";
import { action } from "mobx";

import {
  RiFundsLine,
  RiExchangeFundsLine,
  RiStarLine,
  RiCopperDiamondLine,
} from "react-icons/ri";

import Page from "@comp/layout/Page";
import WalletConnection from "@comp/ui/WalletConnection";

import YearnIcon from "@assets/yearn.svg";

import useVaults from "@hooks/stores/useVaults";
import ThemeSwitcher from "@comp/ui/ThemeSwitcher";

const MenuItem = styled.button(({ active }: { active?: boolean }) => [
  tw`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors w-full`,
  tw`text-xl text-left font-light`,
  !active && tw`dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer`,
  active && tw`dark:bg-gray-600 bg-gray-200`,
]);

const Index = observer(function Index() {
  const vaults = useVaults((store) => store.vaults);
  return (
    <Page>
      <div tw="flex h-screen">
        <div tw="flex-none w-80 min-h-full overflow-y-auto shadow-xl">
          <div tw="flex flex-col min-h-full space-y-6 py-5 dark:bg-gray-700 bg-gray-100">
            <div tw="flex space-x-4 items-center justify-center">
              <YearnIcon tw="w-12 h-12" />
              <h1 tw="text-3xl">yearn.finance</h1>
            </div>
            <hr tw="dark:bg-white bg-black" />
            <div tw="flex justify-center">
              <WalletConnection />
            </div>
            <hr tw="dark:bg-white bg-black" />
            <div tw="flex-grow">
              <ul tw="space-y-2 px-2">
                <MenuItem active>
                  <span tw="flex-grow">EARN</span>
                  <RiFundsLine />
                </MenuItem>
                <MenuItem>
                  <span tw="flex-grow">INSURE</span>
                  <RiStarLine />
                </MenuItem>
                <MenuItem>
                  <span tw="flex-grow">BORROW</span>
                  <RiExchangeFundsLine />
                </MenuItem>
                <MenuItem>
                  <span tw="flex-grow">CREDIT</span>
                  <RiCopperDiamondLine />
                </MenuItem>
              </ul>
            </div>
            <hr />
            <div tw="flex flex-none px-4">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <div tw="flex-none w-96 min-h-full overflow-y-auto">
          <ul>
            {vaults.map((vault) => (
              <li tw="p-4 shadow-inner" key={vault.name}>
                <div tw="flex items-center space-x-4">
                  <img tw="w-10 h-10" src={vault.tokenMetadata.icon} />
                  <h3 tw="text-lg font-mono">{vault.displayName}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div tw="flex-grow min-h-full py-4 overflow-y-auto"></div>
      </div>
    </Page>
  );
});

export default Index;
