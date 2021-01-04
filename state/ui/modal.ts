import { action, makeAutoObservable } from "mobx";
import { ReactNode } from "react";

export default class Modal {
  isOpen: boolean;
  children: ReactNode;

  constructor() {
    makeAutoObservable(this, {
      children: false,
    });
    this.isOpen = false;
    this.children = undefined;
  }

  open = action((content: ReactNode) => {
    this.isOpen = true;
    this.children = content;
  });

  close = action(() => {
    this.isOpen = false;
  });
}
