import AboutData from "../data/about";
import { useGlobalContext } from "../contexts/globalContext";
import { Link } from "react-router-dom";
import { ROUTEs } from "../constants";
import NavLink from "./NavLink";
import ModeToggler from "./ModeToggler";
import { motion } from "framer-motion";
import { SpringTransition } from "../utils";
import LangToggler from "./LangToggler";
const Navbar = () => {
    const { lang } = useGlobalContext();
    const navVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const navLinkVariants = {
        hidden: { opacity: 0, translateX: '100%' },
        visible: {
            opacity: 1,
            translateX: 0,
            transition: SpringTransition(),
        },
    };

    return (
        <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-purple/80 px-3 py-3 flex items-center justify-between z-100">
            <motion.h1
                initial={{ translateX: "-100%", opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={SpringTransition()}
                className="text-extra-large font-bold text-skin"
            >
                <Link to={ROUTEs.HOME}>{AboutData.name[lang]}</Link>
            </motion.h1>

            <nav
                className="hidden sm:block"
            >
                <motion.ul
                    className="flex space-x-6"
                    variants={navVariant}
                    initial={"hidden"}
                    animate={"visible"}
                >
                    <motion.li variants={navLinkVariants}>
                        <NavLink link="/" label="Home" isActive={true} />
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <NavLink link="/about" label="About" />
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <NavLink link="/projects" label="Projects" />
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <ModeToggler />
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <LangToggler />
                    </motion.li>
                </motion.ul>
            </nav>
        </header>
    );
};

export default Navbar;

// https://abhishekganvir.vercel.app/
// https://abdullah-portfolio-dev.vercel.app/
// https://dhlananh-dev-portfolio.vercel.app/
