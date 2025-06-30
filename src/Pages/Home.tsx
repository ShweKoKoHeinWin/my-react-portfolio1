import React from "react";
import { useGlobalContext } from "../contexts/globalContext";
import HomeData from "../data/home";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Button from "../components/Button";

const Home = () => {
    const { lang } = useGlobalContext();
    return (
        <main className="relative min-h-screen overflow-hidden px-3 py-5">
            {/* Hero Content */}
            <section className='min-h-screen flex justify-center items-center gap-5 flex-col lg:flex-row' >
                <div className="flex-1">
                    <h2 className="text-extra-large">Hi! I'm Shwe Ko.</h2>
                    <h3>A Junior Web Dev, trying to improve skills.</h3>
                </div>
            </section>

            <h1 className="text-sm text-text">{HomeData.Hero[lang].intro}</h1>
            <div className="min-h-screen"></div>
            <div className="min-h-screen">
                <div className="w-50 h-50 bg-skin"></div>
                <div className="w-50 h-50 bg-purple"></div>
                <div className="w-50 h-50 bg-lgray"></div>
                <div className="w-50 h-50 bg-orange"></div>
                <div className="w-50 h-50 bg-dark"></div>
                <div className="w-50 h-50 bg-light"></div>
                <div className="w-50 h-50 bg-blue"></div>
            </div>
        </main>
    );
};

export default Home;
