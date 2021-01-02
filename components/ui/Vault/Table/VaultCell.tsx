import React from "react";

import { Vault } from "@state/vaults";
import { TokenFallbackImage } from "@const/assets";
import { observer } from "mobx-react-lite";

export interface VaultCellProps {
  value: Vault;
}

const VaultCellProps = observer(({ value: vault }: VaultCellProps) => {
  return (
    <div className="py-2 px-2 flex items-center space-x-2">
      <img className="w-8 h-8" src={vault.token.icon ?? TokenFallbackImage} />
      <p>{vault.displayName}</p>
      {vault.type != "v1" && <small>{vault.type} ✨</small>}
    </div>
  );
});

export default VaultCellProps;
