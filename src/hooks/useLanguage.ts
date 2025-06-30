import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { GetLocalStorage } from "../utils";
import { DEFAULT_LANG, LANGs, LOCALSTORAGE } from "../constants";
import type { LangProp } from "../types/hook";

export const useLanguage = (): [
    LangProp,
    Dispatch<SetStateAction<LangProp>>
] => {
    const isValidLang = (val: string | null): val is LangProp =>
        val !== null && Object.values(LANGs).includes(val as LangProp);

    const localStorageLang = GetLocalStorage(LOCALSTORAGE.LANG);

    const [lang, setLang] = useState<LangProp>(
        isValidLang(localStorageLang) ? localStorageLang : DEFAULT_LANG
    );

    useEffect(() => {
        if (lang) {
            Object.values(LANGs).forEach((l) =>
                document.documentElement.classList.remove(l)
            );

            //add mode
            document.documentElement.classList.add(lang);
            localStorage.setItem(LOCALSTORAGE.LANG, lang);
        }
    }, [lang]);

    return [lang, setLang];
};
