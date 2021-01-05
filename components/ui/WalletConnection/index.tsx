import React, { useCallback, useMemo } from "react";
import clsx from "clsx";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

import Button from "@comp/ui/Button";
import { shortenAddress } from "@utils/address";
import { DevelopmentChainId, SupportedChainIds } from "@const/web3";

export default function Web3Connection() {
  const { activate, deactivate, active, account, chainId } = useWeb3React();
  const toggleConnection = useCallback(() => {
    if (active) {
      deactivate();
    } else {
      const injected = new InjectedConnector({
        supportedChainIds: SupportedChainIds,
      });
      activate(injected);
    }
  }, [active, activate, deactivate]);
  const status = useMemo(
    () => (account ? shortenAddress(account) : "not connected"),
    [account]
  );
  return (
    <Button onClick={toggleConnection}>
      <div className="flex space-x-2 items-center">
        <p className="font-mono">{status}</p>
        <svg
          className={clsx(
            "fill-current w-3 h-3",
            active
              ? chainId == DevelopmentChainId
                ? "text-yellow-500"
                : "text-green-500"
              : "text-red-500"
          )}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" />
        </svg>
      </div>
    </Button>
  );
}
