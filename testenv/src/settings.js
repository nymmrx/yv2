import "dotenv/config"; // load .env

import signale from "signale";

export const Address = process.env.ADDRESS ?? null;
export const Mnemonic = process.env.MNEMONIC ?? null;

if (!Address || !Mnemonic) {
  signale.fatal("First configure your testenv by creating a .env file");
  process.exit(1);
}
