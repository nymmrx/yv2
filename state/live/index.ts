import { action, makeAutoObservable } from "mobx";

export interface Live {
  conn: WebSocket;
}

export default class LiveStore {
  live: Live;

  constructor() {
    makeAutoObservable(this);
    this.connect();
  }

  connect = action(() => {
    if (!process.browser) return;
    console.log("[live] connecting");
    try {
      const conn = new WebSocket("ws://localhost:8080");
      conn.onopen = action(() => {
        console.log("[live] connected");
      });
      conn.onmessage = action((message) => {
        console.log(message);
      });
      this.live = { conn };
    } catch (err) {
      console.error(err);
    }
  });
}
