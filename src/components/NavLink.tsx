import { type Dispatch, type SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
export const NavLink = ({ link = "", label = "" }) => {
    const location = useLocation();
    const isActive = location.pathname === link;

    return (
        <Link
            to={link}
            className={`${
                isActive && "scale-[1.05] shadow-light shadow-lg"
            } relative z-[10] cursor-pointer relative px-4 py-1  overflow-hidden rounded-lg inline-flex justify-center items-center group hover:scale-[1.07] hover:shadow-md hover:shadow-light active:scale-[0.95] active:shadow-full active:translate-y-0 transition-all duration-300`}
        >
            <div
                className={`absolute left-0 top-0 w-full h-full z-[0] bg-light
                     ${
                    isActive ? "" : "-translate-x-3/2"
                }
                 -translate-y-2/5 group-hover:translate-0 transition-all duration-500`}
            ></div>
            <div
                className={`absolute left-0 bottom-0 w-full h-full z-[0] bg-light 
                    ${
                    isActive ? "" : "translate-x-3/2"
                }
                 translate-y-2/5 group-hover:translate-0 transition-all duration-500`}
            ></div>
            <span
                className={`${
                    isActive ? "text-orange" : "text-skin"
                } text-md font-bold group-hover:text-orange z-10`}
            >
                {label}
            </span>
        </Link>
    );
};

export const MobileNavLink = ({ order, link, label, open, setOpen }: {order: number, link: string; label: string; open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
    const location = useLocation();
    const isActive = location.pathname === link;
    return (
        <motion.div
            initial={{
                scale: 0,
                opacity: 0,
                y: -20,
            }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{
                scale: 0,
                opacity: 0,
                y: -1 * order * 104, // Pull each lantern up to the top position (104px = lantern height + gap)
                transition: {
                    delay: order * 0.1, // Staggered exit from top to bottom
                    duration: 0.4,
                    ease: "easeInOut",
                },
            }}
            transition={{
                delay: open ? 0.2 * order : 0, // Staggered entrance
                type: "spring",
                stiffness: 100,
                damping: 8,
                bounce: .5
            }}
            className="relative cursor-pointer group"
            onClick={() => setOpen(false)}
        >
            {/* String line */}
            <motion.div
                className="absolute top-[-32px] left-1/2 w-[2px] h-8 bg-secondary -translate-x-1/2"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{
                    scaleY: 0,
                    transition: {
                        delay: order * 0.1 + 0.2, // String disappears after lantern starts moving
                        duration: 0.2,
                    },
                }}
                transition={{
                    delay: open ? 0.2 * order + 0.1 : 0 * 0.1,
                }}
                style={{ transformOrigin: "top" }}
            />

            {/* Lantern Body */}
            <Link to={link}>
                <motion.div
                    className={`relative w-40 h-20 ${isActive ? 'rounded-full ring-2' : 'rounded-3xl'} bg-gradient-to-b from-skin  via-purple to-orange shadow-round hover:ring-2 ring-secondary group-hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-shadow duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Inner glow */}
                    <div className="absolute inset-2 rounded-full bg-dark/40 opacity-80" />

                    {/* Navigation text */}
                    <div className="absolute inset-0 flex items-center justify-center text-skin">
                        {/* <span className="text-yellow-100 text-xs font-bold text-center leading-tight"> */}
                        {label}
                        {/* </span> */}
                    </div>

                    {/* Decorative pattern */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-skin rounded-full opacity-60" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-skin rounded-full opacity-60" />
                </motion.div>
            </Link>
            {/* Tassel */}
            <motion.div
                className="absolute bottom-[-16px] left-1/2 w-[6px] h-6 bg-secondary -translate-x-1/2 rounded-sm"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{
                    scaleY: 0,
                    transition: {
                        delay: order * 0.1 + 0.15,
                        duration: 0.2,
                    },
                }}
                transition={{
                    delay: open ? 0.2 * order + 0.15 : order * 0.1 + 0.05,
                }}
                style={{ transformOrigin: "top" }}
            />

            {/* Tassel fringe */}
            <motion.div
                className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 flex gap-[1px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    transition: {
                        delay: order * 0.1 + 0.1,
                        duration: 0.2,
                    },
                }}
                transition={{
                    delay: open ? 0.2 * order + 0.2 : order * 0.1,
                }}
            >
                {[...Array(5)].map((_, j) => (
                    <div
                        key={j}
                        className="w-[1px] h-3 bg-secondary"
                        style={{
                            height: `${8 + Math.random() * 4}px`,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};
