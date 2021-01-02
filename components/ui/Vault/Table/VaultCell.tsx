import React from "react";
import { motion } from "framer-motion";

import { Vault } from "@state/vaults";
import { TokenFallbackImage } from "@const/assets";
import { observer } from "mobx-react-lite";

export interface VaultCellProps {
  value: Vault;
}

const VaultCellProps = observer(({ value: vault }: VaultCellProps) => {
  return (
    <div className="py-3 px-2 flex items-center space-x-3">
      <motion.img
        className="w-8 h-8"
        src={vault.token.icon ?? TokenFallbackImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <p>{vault.displayName}</p>
      {vault.type != "v1" && <small>{vault.type} ✨</small>}
    </div>
  );
});

export default VaultCellProps;
