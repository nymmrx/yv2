import { action, makeAutoObservable, observable } from "mobx";

import Modal from "./modal";

export default class UIStore {
  theme: "dark" | "light";
  modal: Modal;

  constructor() {
    makeAutoObservable(this);
    this.reset();
  }

  reset = action(() => {
    this.theme = "dark";
    this.modal = new Modal();
  });
}
