import React, { useMemo, ReactNode } from "react";

import VaultsStore from "./vaults";
import LiveStore from "./live";
import UIStore from "./ui";

class RootStore {
  vaults: VaultsStore;
  // live: LiveStore;
  ui: UIStore;

  constructor() {
    this.vaults = new VaultsStore();
    // this.live = new LiveStore();
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
