import React, { useCallback, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

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
  const [val, setVal] = useState("");
  const inputRef = useRef<HTMLInputElement>();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <DialogContent className="dark:bg-gray-700 dark:text-white rounded-lg p-0 max-w-3xl">
      <div className="p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12"
            src={vault.token.icon ?? TokenFallbackImage}
          />
          <div className="flex-grow">
            <h3 className="font-bold">Deposit: {vault.displayName}</h3>
            <p className="font-mono">{vault.symbol}</p>
          </div>
          <Button>Deposit</Button>
        </div>
        <div>
          <div className="dark:bg-gray-800 p-4 rounded-xl">
            <div className="flex items-baseline">
              <h4 className="flex-grow text-lg">Amount</h4>
              <p className="text-sm hover:border-b-2 border-dotted cursor-pointer">
                Balance: <span className="font-mono">123</span>
              </p>
            </div>
            <div className="flex items-baseline space-x-2">
              <NumericInput
                ref={inputRef}
                value={val}
                onChange={setVal}
                className="flex-grow text-2xl"
              />
              <p className="font-mono">{vault.token.symbol}</p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
});

export default VaultInteractView;
