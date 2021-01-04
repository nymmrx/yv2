import React from "react";
import { observer } from "mobx-react-lite";
import { useSpring, animated } from "react-spring";

import { Vault } from "@state/vaults";
import { TokenFallbackImage } from "@const/assets";

export interface VaultCellProps {
  value: Vault;
}

const VaultCellProps = observer(function VaultCellProps({
  value: vault,
}: VaultCellProps) {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1e3 },
  });
  return (
    <div className="py-3 px-2 flex items-center space-x-3">
      <animated.img
        style={animation}
        className="w-8 h-8"
        src={vault.token.icon ?? TokenFallbackImage}
      />
      <p>{vault.displayName}</p>
      {vault.type != "v1" && <small>{vault.type} ✨</small>}
    </div>
  );
});

export default VaultCellProps;
