 import en from "../Localization/en.json";
import hi from "../Localization/hi.json";

export const useLocalization = (lang) => {
  return lang === "hi" ? hi : en;
};