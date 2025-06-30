import type { Transition } from "framer-motion";

export const GetLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};

export const SpringTransition = (duration = .5): Transition => ({
    type: "spring",
    stiffness: 100,
    damping: 10,
    bounce: 0.8,
    duration,
    ease: "easeIn",
});
