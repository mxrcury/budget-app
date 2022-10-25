import { getItemFromStorage } from "../../utils/sessionStorage";
import { LOCALES } from "../i18n";
import { THEMES } from "./../themeToggle/themeList";

export default {
  currency: "UAH",
  theme: getItemFromStorage("themeName") || THEMES.BASIC,
  locale: getItemFromStorage("locale") || LOCALES.ENGLISH,
};
