import React from "react";

import { Vault } from "@state/vaults";
import { observer } from "mobx-react-lite";

import { BsGraphUp, BsArrowUpDown } from "react-icons/bs";
import Button from "@comp/ui/Button";

export interface ButtonCellProps {
  value: Vault;
}

const ButtonCellProps = observer(({ value: vault }: ButtonCellProps) => {
  return (
    <div className="space-x-2 text-right pr-2">
      <Button>
        <div className="flex items-center space-x-2">
          <BsArrowUpDown />
          <p>Interact</p>
        </div>
      </Button>
      <Button>
        <div className="flex items-center space-x-2">
          <BsGraphUp />
          <p>Stats</p>
        </div>
      </Button>
    </div>
  );
});

export default ButtonCellProps;
