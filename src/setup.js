import {
  Bell,
  createIcons,
  Menu,
  Minus,
  MonitorSmartphone,
  Moon,
  Plus,
  RefreshCcw,
  Search,
  Sun,
  Tag,
  X,
  User,
} from "lucide";
import { themeToggleDarkIcon, themeToggleLightIcon } from "./selectors";

const setup = () => {
  iconSetup();
  themeSetup();
};

const iconSetup = () => {
  createIcons({
    icons: {
      Sun,
      Moon,
      RefreshCcw,
      Bell,
      Plus,
      Search,
      Tag,
      Minus,
      X,
      User,
    },
  });
};

const themeSetup = () => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }
};
export default setup;
