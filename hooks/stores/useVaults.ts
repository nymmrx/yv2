import context from "@state/provider";
import VaultStore from "@state/vaults";

import useStore from "@hooks/useStore";

export default function useVaults<Selection>(
  dataSelector: (store: VaultStore) => Selection
) {
  return useStore(context, (root) => root.vaults, dataSelector);
}
