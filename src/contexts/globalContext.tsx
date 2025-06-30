import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
import useAppearance from "../hooks/useAppearance";
import { useLanguage } from "../hooks/useLanguage";
import type { AppearanceMode, LangProp } from "../types/hook";

interface GlobalContextType {
    mode: AppearanceMode,
    setMode: Dispatch<SetStateAction<AppearanceMode>>,

    lang: LangProp;
    setLang: Dispatch<SetStateAction<LangProp>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error(
            "useGlobalContext must be used within a GlobalContextProvider"
        );
    }
    return context;
};

export const GlobalContextProvider = (props: React.PropsWithChildren<{}>) => {
    const [mode, setMode] = useAppearance();
    const [lang, setLang] = useLanguage();

    return (
        <GlobalContext.Provider
            value={{
                mode,
                setMode,
                lang,
                setLang,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
