import React, { useMemo } from "react";
import clsx from "clsx";

import Button, { ButtonProps } from "@comp/ui/Button";
import { shortenAddress } from "@utils/address";

export interface Web3ConnectionProps extends ButtonProps {
  address?: string;
  connected?: boolean;
}

export default function Web3Connection({
  address,
  connected,
  ...props
}: Web3ConnectionProps) {
  const status = useMemo(
    () => (address ? shortenAddress(address) : "not connected"),
    [address]
  );
  return (
    <Button {...props}>
      <div className="flex space-x-2 items-center">
        <p className="font-mono">{status}</p>
        <svg
          className={clsx(
            "fill-current w-3 h-3",
            connected ? "text-green-500" : "text-red-500"
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
