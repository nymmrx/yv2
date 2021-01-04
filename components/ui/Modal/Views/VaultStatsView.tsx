import React from "react";

import { Vault } from "@state/vaults";
import { observer } from "mobx-react-lite";

export interface VaultInteractViewProps {
  vault: Vault;
}

const VaultInteractView = observer(function VaultInteractView({
  vault,
}: VaultInteractViewProps) {
  return <h1>Stats {vault.name}</h1>;
});

export default VaultInteractView;
