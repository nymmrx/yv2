import { action, makeObservable, observable } from "mobx";
import fetch from "node-fetch";

import api from "@const/api";

export default class VaultsStore {
  vaults = [];

  constructor() {
    makeObservable(this, {
      vaults: observable,
      fetch: action,
    });
    this.fetch();
  }

  fetch() {
    console.log("[vaults] fetching");
    fetch(api.vaults.all)
      .then((res) => res.json())
      .then(action((vaults) => (this.vaults = vaults)));
  }
}
