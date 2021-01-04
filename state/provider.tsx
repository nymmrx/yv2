import React, { ReactNode } from "react";
import UIStore from "./ui";

import VaultsStore from "./vaults";

class RootStore {
  vaults: VaultsStore;
  ui: UIStore;
  constructor() {
    this.vaults = new VaultsStore();
    this.ui = new UIStore();
  }
}

export const storeContext = React.createContext<RootStore | null>(null);
export default storeContext;

export interface StoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({
  children,
}: StoreProviderProps) => {
  const store = new RootStore();
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
