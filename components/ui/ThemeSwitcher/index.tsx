import React from "react";
import { observer } from "mobx-react-lite";

import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

import Button from "../Button";
import useUI from "@hooks/stores/useUI";
import { action } from "mobx";

const ThemeSwitcher = observer(function ThemeSwitcher() {
  let ui = useUI((ui) => ui);

  const toggleTheme = action(() => {
    ui.theme = ui.theme === "dark" ? "light" : "dark";
  });

  return (
    <Button onClick={toggleTheme}>
      {ui.theme === "light" && <RiSunFill className="w-5 h-5" />}
      {ui.theme === "dark" && <RiMoonClearFill className="w-5 h-5" />}
    </Button>
  );
});

export default ThemeSwitcher;
