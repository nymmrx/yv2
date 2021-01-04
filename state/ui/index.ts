import { action, makeAutoObservable } from "mobx";

import Modal from "./modal";

export interface UI {
  modal: Modal;
}

export default class UIStore {
  ui: UI;

  constructor() {
    makeAutoObservable(this);
    this.reset();
  }

  reset = action(() => {
    this.ui = {
      modal: new Modal(),
    };
  });
}
