import { Route, Routes } from "react-router-dom";
import { CartoonGuide } from "./components/cartoon";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import { ROUTEs } from "./constants";
import Navbar from "./components/Navbar";


function App() {
    return (
        <div>
            
            <Navbar/>
            
            <Routes>
                <Route path={ROUTEs.HOME} element={<Home />} />

                <Route path={ROUTEs.ABOUT} element={<About />} />

                <Route path={ROUTEs.PROJECTS} element={<Projects />} />
            </Routes>

            <CartoonGuide />
        </div>
    );
}

export default App;
