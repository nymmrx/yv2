import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers/lib/web3-provider";
import { formatUnits, commify } from "@ethersproject/units";

import { BigNumber } from "ethers";

import { Erc20__factory } from "@contracts/index";

import { Vault } from "@state/vaults";
import { TokenFallbackImage } from "@const/assets";
import NumericInput from "@comp/ui/NumericInput";
import Button from "@comp/ui/Button";
import { DialogContent } from "@reach/dialog";

export interface VaultInteractViewProps {
  vault: Vault;
}

const VaultInteractView = observer(function VaultInteractView({
  vault,
}: VaultInteractViewProps) {
  const { tokenAddress } = vault;
  const { active, account, library } = useWeb3React<Web3Provider>();

  const [val, setVal] = useState("");
  const [balance, setBalance] = useState(BigNumber.from(0));
  const [decimals, setDecimals] = useState(0);

  useEffect(() => {
    if (active) {
      const updateBalance = async () => {
        const contract = Erc20__factory.connect(tokenAddress, library);
        const decimals = await contract.decimals();
        setDecimals(decimals);
        const accountBalance = await contract.balanceOf(account);
        console.log(accountBalance.toString());
        setBalance(accountBalance);
      };
      updateBalance();
    }
  }, [tokenAddress, active, account, library]);

  // focus on text input upon opening
  const inputRef = useRef<HTMLInputElement>();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <DialogContent
      aria-label="Vault interact"
      className="dark:bg-gray-700 dark:text-white rounded-lg p-0 w-10/12 lg:max-w-3xl"
    >
      <div className="p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12"
            src={vault.tokenMetadata.icon ?? TokenFallbackImage}
          />
          <div className="flex-grow">
            <h3 className="font-bold">Deposit: {vault.displayName}</h3>
            <p className="font-mono">{vault.symbol}</p>
          </div>
          <Button>Deposit</Button>
        </div>
        <div>
          <div className="dark:bg-gray-800 bg-gray-200 p-4 rounded-xl">
            <div className="flex items-baseline">
              <h4 className="flex-grow text-lg">Amount</h4>
              <p className="text-sm hover:border-b-2 border-dotted border-black dark:border-white cursor-pointer">
                <span>Balance: </span>
                <span className="font-mono max-w-sm overflow-ellipsis">
                  {formatUnits(balance, decimals)}
                </span>
              </p>
            </div>
            <div className="flex items-baseline space-x-2">
              <NumericInput
                ref={inputRef}
                value={val}
                onChange={setVal}
                className="flex-grow text-2xl"
              />
              <p className="font-mono">SYMBOL</p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
});

export default VaultInteractView;
