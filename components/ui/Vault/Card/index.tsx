import React from "react";
import { observer } from "mobx-react-lite";

import { Vault } from "@state/vaults";

export interface VaultCardProps {
  vault: Vault;
}

const VaultCard = observer(({ vault }: VaultCardProps) => {
  return <div className="rounded-lg">{vault.displayName}</div>;
});

export default VaultCard;
