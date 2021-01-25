import React from "react";
import clsx from "clsx";

import { observer } from "mobx-react-lite";

import useUI from "@hooks/stores/useUI";

const DarkModeProvider = observer(function DarkModeProvider({ children }) {
  let ui = useUI((ui) => ui);
  return <div className={clsx(ui.theme === "dark" && "dark")}>{children}</div>;
});

export default DarkModeProvider;
