import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalContextProvider } from "./contexts/globalContext.tsx";
import "./hooks/useLanguage.ts";
import { BrowserRouter } from "react-router-dom";
import './index.css'

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalContextProvider>
    </StrictMode>
);
