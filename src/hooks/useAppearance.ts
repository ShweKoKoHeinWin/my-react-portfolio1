import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { GetLocalStorage } from "../utils";
import { DEFAULT_MODE, LOCALSTORAGE, MODEs } from "../constants";
import type { AppearanceMode } from "../types/hook";

const useAppearance = (): [AppearanceMode, Dispatch<SetStateAction<AppearanceMode>>] => {
    const isAppearanceMode = (value: string | null): value is AppearanceMode => value !== null && Object.values(MODEs).includes(value as AppearanceMode);

    const localStorageMode = GetLocalStorage(LOCALSTORAGE.MODE);

    const [mode, setMode] = useState<AppearanceMode>(
        isAppearanceMode(localStorageMode) ? localStorageMode : DEFAULT_MODE
    );

    useEffect(() => {
        if (mode) {
            //remove mode
            Object.values(MODEs).forEach(m => document.documentElement.classList.remove(m));

            //add mode
            document.documentElement.classList.add(mode);

            localStorage.setItem(LOCALSTORAGE.MODE, mode);
        }
    }, [mode]);

    return [mode, setMode];
};

export default useAppearance;
