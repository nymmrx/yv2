/// <reference types="next" />
/// <reference types="next/types/global" />

export declare global {
  import { ExternalProvider } from "@ethersproject/providers";
  interface Window {
    ethereum: ExternalProvider;
  }
}
