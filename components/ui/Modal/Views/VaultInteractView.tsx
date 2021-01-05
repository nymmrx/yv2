import React, { useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

import { Vault } from "@state/vaults";
import { TokenFallbackImage } from "@const/assets";
import { formatPercentage } from "@utils/format";
import NumericInput from "@comp/ui/NumericInput";
import Button from "@comp/ui/Button";

export interface VaultInteractViewProps {
  vault: Vault;
}

const VaultInteractView = observer(function VaultInteractView({
  vault,
}: VaultInteractViewProps) {
  const roi = useMemo(() => {
    const sample = vault.apy.oneMonthSample ?? undefined; // null / N = 0 ?!?!
    return {
      day: formatPercentage(sample / 365),
      month: formatPercentage(sample / 12),
      year: formatPercentage(sample),
    };
  }, [vault]);
  const [val, setVal] = useState("");
  return (
    <div className="m-auto dark:bg-gray-700 dark:text-white rounded-lg p-0 max-w-3xl">
      <div className="p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12"
            src={vault.token.icon ?? TokenFallbackImage}
          />
          <div className="flex-grow">
            <h3 className="font-bold">Stake {vault.displayName}</h3>
            <p className="font-mono">{vault.token.symbol}</p>
          </div>
          <Button>Stake</Button>
        </div>
        <div>
          <div className="dark:bg-gray-800 p-4 rounded-xl">
            <div className="flex items-baseline">
              <h4 className="flex-grow text-lg">Amount</h4>
              <p className="text-sm border-b-2 border-dotted cursor-pointer">
                Balance: <span className="font-mono">123</span>
              </p>
            </div>
            <div className="flex items-baseline">
              <NumericInput
                value={val}
                onChange={setVal}
                className="flex-grow text-2xl"
              />
              <p className="font-mono">ETH</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-4 pb-2">
        <p className="flex-grow font-semibold">ROI</p>
        <p className="flex-grow">
          daily: <span className="font-mono">{roi.day}</span>
        </p>
        <p className="flex-grow">
          monthly: <span className="font-mono">{roi.month}</span>
        </p>
        <p className="flex-shrink">
          yearly: <span className="font-mono">{roi.year}</span>
        </p>
      </div>
    </div>
  );
});

export default VaultInteractView;
