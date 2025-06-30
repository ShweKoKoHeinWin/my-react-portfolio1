import { Moon, Sun } from "lucide-react";
import { useGlobalContext } from "../contexts/globalContext";
import { MODEs } from "../constants";

const ModeToggler = () => {
    const { mode, setMode } = useGlobalContext();
    return (
        <div
            className={`relative flex justify-center items-center text-skin p-1 ring-1 rounded-lg cursor-pointer z-10`}
            onClick={() => setMode(mode === MODEs.LIGHT ? MODEs.DARK : MODEs.LIGHT)}
        >
            {mode === MODEs.LIGHT ? <Moon /> : <Sun />}
        </div>
    );
};

export default ModeToggler;
