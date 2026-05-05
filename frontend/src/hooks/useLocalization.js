 import en from "../localization/en.json";
import hi from "../localization/hi.json";

export const useLocalization = (lang) => {
  return lang === "hi" ? hi : en;
};