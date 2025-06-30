import { LANGs } from "../constants";
import { useGlobalContext } from "../contexts/globalContext";
import type { LangProp } from "../types/hook";

const LangToggler = () => {
    const {lang, setLang} = useGlobalContext();
    return (
        <select defaultValue={lang} onChange={(e) => setLang(e.target.value as LangProp)} className="ring-2 rounded-lg p-1 text-skin">
            {Object.values(LANGs).map((val) => (
                <option key={val} className="bg-dark" value={val}>{val}</option>
            ))}
        </select>
    );
};

export default LangToggler;
