import handleTheme from "./handlers";
import { themeToggleBtn } from "./selectors";

const listener = () => {
  themeToggleBtn.addEventListener("click", handleTheme);
};

export default listener;
