import AboutData from "../data/about";
import { useGlobalContext } from "../contexts/globalContext";
import { Link } from "react-router-dom";
import { ROUTEs } from "../constants";
import { MobileNavLink, NavLink } from "./NavLink";
import ModeToggler from "./ModeToggler";
import { motion, AnimatePresence } from "framer-motion";
import { SpringTransition } from "../utils";
import LangToggler from "./LangToggler";
import CTA from "../data/cta";
import { ArrowBigDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import useScreen from "../hooks/useScreen";

const Navbar = () => {
    const { lang } = useGlobalContext();
    const [open, setOpen] = useState(false);
    const isMobileScreen = useScreen(); 
    
    const navVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const navLinkVariants = {
        hidden: { opacity: 0, translateX: "100%" },
        visible: {
            opacity: 1,
            translateX: 0,
            transition: SpringTransition(),
        },
    };

    useEffect(() => {
        setOpen(false);        
    }, [isMobileScreen])

    return (
        <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-purple/80 px-3 py-2 flex items-center justify-between gap-2 z-20">
            <motion.h1
                initial={{ translateX: "-100%", opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={SpringTransition()}
                className="max-w-1/2 text-center text-medium xs:text-large lg:text-extra-large font-bold text-skin group relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-3 bg-skin shadow-xl shadow-light -translate-x-full group-hover:translate-x-0 transition-all duration-300  blur-sm animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-3 bg-skin shadow-xl shadow-light translate-x-full group-hover:translate-x-0 transition-all duration-300  blur-sm  animate-pulse" />
                <div className="absolute top-0 left-0 w-1 h-full bg-skin shadow-xl shadow-light -translate-y-full group-hover:translate-y-0 transition-all duration-300  blur-sm animate-spin animate-pulse" />
                <div className="absolute bottom-0 right-0 w-1 h-full bg-skin shadow-xl shadow-light translate-y-full group-hover:translate-y-0 transition-all duration-300  blur-sm animate-spin animate-pulse" />
                <Link to={ROUTEs.HOME} className="outline-none p-1">
                    {AboutData.name[lang]}
                </Link>
            </motion.h1>

            {/* Mobile */}
            {open && <Backdrop setState={setOpen} />}
            <div className="relative md:hidden z-20">
                <motion.div
                    whileInView={{ scale: 1 }}
                    className="text-skin drop-shadow-sm drop-shadow-dark flex jusfity-center items-center p-1 sm:p-2 shadow-sm shadow-skin rounded-full group overflow-hidden"
                    initial={{ scale: 0 }}
                    animate={{ y: [-5, 0, 5, 0, -5] }}
                    transition={{
                        y: { duration: 1, repeat: Infinity },
                        scale: { duration: 0.5 },
                    }}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={25} /> : <ArrowBigDown size={25} />}
                    <div className={`absolute top-0 left-0 w-3 h-3 bg-skin shadow-xl shadow-light ${open && 'w-full'} duration-300 blur-sm group-hover:w-full animate-spin`} />
                    <div className={`absolute bottom-0 left-0 w-3 h-3 bg-skin shadow-xl shadow-light duration-300 blur-sm group-hover:h-full animate-spin`} />
                    <div className={`absolute top-0 right-0 w-3 h-3 bg-skin shadow-xl shadow-light duration-300 blur-sm group-hover:h-full animate-spin`} />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 bg-skin shadow-xl shadow-light ${open && 'w-full'} duration-300 blur-sm group-hover:w-full animate-spin`} />
                </motion.div>

                <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
                    <AnimatePresence>
                        {open && (
                            <>
                                <MobileNavLink
                                    order={0}
                                    link={ROUTEs.HOME}
                                    label={CTA.Nav[lang].home}
                                    open={open}
                                    setOpen={setOpen}
                                />
                                <MobileNavLink
                                    order={1}
                                    link={ROUTEs.ABOUT}
                                    label={CTA.Nav[lang].about}
                                    open={open}
                                    setOpen={setOpen}
                                />
                                <MobileNavLink
                                    order={2}
                                    link={ROUTEs.PROJECTS}
                                    label={CTA.Nav[lang].projects}
                                    open={open}
                                    setOpen={setOpen}
                                />
                                <MobileNavLink
                                    order={3}
                                    link={ROUTEs.CONTACT}
                                    label={CTA.Nav[lang].contact}
                                    open={open}
                                    setOpen={setOpen}
                                />
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <nav className="">
                <motion.ul
                    className="flex items-center space-x-3"
                    variants={navVariant}
                    initial={"hidden"}
                    animate={"visible"}
                >
                    <motion.li
                        variants={navLinkVariants}
                        className="hidden md:block"
                    >
                        <NavLink
                            link={ROUTEs.HOME}
                            label={CTA.Nav[lang].home}
                        />
                    </motion.li>
                    <motion.li
                        variants={navLinkVariants}
                        className="hidden md:block"
                    >
                        <NavLink
                            link={ROUTEs.ABOUT}
                            label={CTA.Nav[lang].about}
                        />
                    </motion.li>
                    <motion.li
                        variants={navLinkVariants}
                        className="hidden md:block"
                    >
                        <NavLink
                            link={ROUTEs.PROJECTS}
                            label={CTA.Nav[lang].projects}
                        />
                    </motion.li>
                    <motion.li
                        variants={navLinkVariants}
                        className="hidden md:block"
                    >
                        <NavLink
                            link={ROUTEs.CONTACT}
                            label={CTA.Nav[lang].contact}
                        />
                    </motion.li>

                    {/* Dark LIght toggler */}
                    <motion.li variants={navLinkVariants}>
                        <ModeToggler />
                    </motion.li>
                    {/* Lang Toggler */}
                    <motion.li variants={navLinkVariants}>
                        <LangToggler />
                    </motion.li>
                </motion.ul>
            </nav>
        </header>
    );
};

export default Navbar;
