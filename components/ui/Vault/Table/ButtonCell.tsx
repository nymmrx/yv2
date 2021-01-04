import React from "react";
import { observer } from "mobx-react-lite";

import { BsGraphUp, BsArrowUpDown } from "react-icons/bs";

import { Vault } from "@state/vaults";
import Button from "@comp/ui/Button";
import useUI from "@hooks/stores/useUI";

import VaultInteractView from "@comp/ui/Modal/Views/VaultInteractView";
import VaultStatsView from "@comp/ui/Modal/Views/VaultStatsView";

export interface ButtonCellProps {
  value: Vault;
}

const ButtonCellProps = observer(function ButtonCellProps({
  value: vault,
}: ButtonCellProps) {
  const { open } = useUI((store) => store.ui.modal);
  const openVaultInteract = () => open(<VaultInteractView vault={vault} />);
  const openVaultStats = () => open(<VaultStatsView vault={vault} />);
  return (
    <>
      <div className="space-x-2 text-right pr-2">
        <Button onClick={openVaultInteract}>
          <div className="flex items-center space-x-2">
            <BsArrowUpDown />
            <p>Interact</p>
          </div>
        </Button>
        <Button onClick={openVaultStats}>
          <div className="flex items-center space-x-2">
            <BsGraphUp />
            <p>Stats</p>
          </div>
        </Button>
      </div>
    </>
  );
});

export default ButtonCellProps;
