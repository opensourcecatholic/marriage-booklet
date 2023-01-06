import { I18n } from "i18n-js"
import translations from "../src/translations.json" assert { type: "json" }
export const i18n = new I18n(translations);
i18n.locale = document.documentElement.lang || "en";
