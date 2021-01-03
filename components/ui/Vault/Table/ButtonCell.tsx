import React, { useCallback, useState } from "react";

import { Vault } from "@state/vaults";
import { observer } from "mobx-react-lite";

import { BsGraphUp, BsArrowUpDown } from "react-icons/bs";
import Button from "@comp/ui/Button";
import Modal from "@comp/ui/Modal";

export interface ButtonCellProps {
  value: Vault;
}

const ButtonCellProps = observer(({ value: vault }: ButtonCellProps) => {
  const [showInteract, setShowInteract] = useState(false);
  const closeInteract = () => setShowInteract(false);
  const openInteract = () => setShowInteract(true);

  const [showStats, setShowStats] = useState(false);
  const closeStats = () => setShowStats(false);
  const openStats = () => setShowStats(true);

  return (
    <>
      <div className="space-x-2 text-right pr-2">
        <Button onClick={openInteract}>
          <div className="flex items-center space-x-2">
            <BsArrowUpDown />
            <p>Interact</p>
          </div>
        </Button>
        <Button onClick={openStats}>
          <div className="flex items-center space-x-2">
            <BsGraphUp />
            <p>Stats</p>
          </div>
        </Button>
      </div>
      <Modal isOpen={showInteract} onDismiss={closeInteract}>
        Interactions with {vault.displayName}
      </Modal>
      <Modal isOpen={showStats} onDismiss={closeStats}>
        Stats for {vault.displayName}
      </Modal>
    </>
  );
});

export default ButtonCellProps;
