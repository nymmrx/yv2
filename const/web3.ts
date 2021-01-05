export const NetworkContextName = "NETWORK";
export const MainnetChainId = 1;
export const DevelopmentChainId = 1337;
export const SupportedChainIds =
  process.env.NODE_ENV === "development"
    ? [MainnetChainId, DevelopmentChainId]
    : [MainnetChainId];
