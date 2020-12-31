import React, { ReactNode } from "react";

import VaultsStore from "./vaults";

class RootStore {
  vaults: VaultsStore;
  constructor() {
    this.vaults = new VaultsStore();
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
