import React, { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

import Button from "@comp/ui/Button";
import { shortenAddress } from "@utils/address";
import { DevelopmentChainId, SupportedChainIds } from "@const/web3";
import useStore from "@hooks/useStore";
import { Web3Provider } from "@ethersproject/providers/lib/web3-provider";

export default function Web3Connection() {
  const {
    activate,
    deactivate,
    active,
    account,
    chainId,
    library,
  } = useWeb3React<Web3Provider>();
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

  const [status, setStatus] = useState("not connected");

  useEffect(() => {
    if (active && account) {
      setStatus(shortenAddress(account));
      library
        .lookupAddress(account)
        .then((ens) => {
          console.log(ens);
          ens && setStatus(ens);
        })
        .catch(console.error);
    } else {
      setStatus("not connected");
    }
  }, [active, account, library]);

  return (
    <Button onClick={toggleConnection}>
      <div className="flex space-x-2 items-center max-w-xs">
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
