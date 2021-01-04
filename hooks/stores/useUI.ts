import context from "@state/provider";
import UIStore from "@state/ui";

import useStore from "@hooks/useStore";

export default function useUI<Selection>(
  dataSelector: (store: UIStore) => Selection
) {
  return useStore(context, (root) => root.ui, dataSelector);
}
