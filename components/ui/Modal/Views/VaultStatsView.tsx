import React from "react";

import { Vault } from "@state/vaults";
import { observer } from "mobx-react-lite";
import { DialogContent } from "@reach/dialog";

export interface VaultInteractViewProps {
  vault: Vault;
}

const VaultInteractView = observer(function VaultInteractView({
  vault,
}: VaultInteractViewProps) {
  return (
    <DialogContent
      aria-label="Vault interact"
      className="dark:bg-gray-700 dark:text-white rounded-lg p-0 max-w-3xl"
    >
      <h1>Stats {vault.name}</h1>
    </DialogContent>
  );
});

export default VaultInteractView;
