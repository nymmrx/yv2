import { action, makeObservable, observable } from "mobx";
import fetch from "node-fetch";

import api from "@const/api";

import sample from "./sample_data.json";

export interface Vault {
  name: string;
  type: string;
  address: string;
  displayName: string;
  created: number;
  updated: number;
  symbol: string;
  decimals: string;
  inceptionBlock: string;
  icon: string | null;
  token: {
    symbol: string;
    address: string;
    displayName: string;
    decimals: string;
    name: string;
    icon: string | null;
  };
  apy: {
    inceptionSample: number | null;
    oneMonthSample: number | null;
  };
}

export default class VaultsStore {
  vaults: Vault[] = [];

  constructor() {
    makeObservable(this, {
      vaults: observable,
      fetch: action,
    });
    this.fetch();
  }

  fetch = () => {
    console.log("[vaults] fetching");
    fetch(api.vaults.all)
      .then((res) => res.json())
      .then((res) => {
        return res;
      })
      .then(action("Hello World", (vaults) => (this.vaults = vaults)));
    // this.vaults = sample;
  };
}
