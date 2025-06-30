"use client";

import { motion, AnimatePresence } from "framer-motion";

import {
    MessageCircle,
    Sparkles,
    Heart,
    Zap,
    VolumeX,
    Volume2,
} from "lucide-react";
import { useState } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import { SpringTransition } from "../utils";

const sectionDialogs = {
    hero: {
        text: "Welcome! I'm here to guide you through this amazing journey! 🎉",
        mood: "excited",
        icon: Sparkles,
    },
    about: {
        text: "Let me tell you more about what makes this special! ✨",
        mood: "friendly",
        icon: Heart,
    },
    features: {
        text: "Check out these awesome features! They're pretty cool! 🚀",
        mood: "enthusiastic",
        icon: Zap,
    },
    contact: {
        text: "Ready to get in touch? I'm here to help you connect! 📞",
        mood: "helpful",
        icon: MessageCircle,
    },
    default: {
        text: "Hi there! I'm your friendly guide. Scroll around to see me react! 👋",
        mood: "neutral",
        icon: MessageCircle,
    },
};

export function CartoonGuide() {
    const activeSection = useSectionInView();
    const [isMuted, setIsMuted] = useState(false);
    const currentDialog =
        sectionDialogs[activeSection as keyof typeof sectionDialogs] ||
        sectionDialogs.default;

    const characterVariants = {
        excited: {
            scale: [1, 1.1, 1],
            rotate: [0, -3, 3, 0],
            transition: {
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1.5,
            },
        },
        friendly: {
            scale: 1,
            rotate: 0,
            y: [0, -8, 0],
            transition: { duration: 2.5, repeat: Number.POSITIVE_INFINITY },
        },
        enthusiastic: {
            scale: [1, 1.08, 1],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
            },
        },
        helpful: {
            scale: 1,
            rotate: [0, 2, -2, 0],
            transition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
        },
        neutral: {
            scale: 1,
            rotate: 0,
            y: [0, -5, 0],
            transition: { duration: 4, repeat: Number.POSITIVE_INFINITY },
        },
        muted: {
            scale: 0.95,
            rotate: 0,
            y: 0,
            transition: { duration: 0.3 },
        },
    };

    const renderFace = () => {
        if (isMuted) {
            return (
                <>
                    {/* Sad eyes */}
                    <div className="absolute top-5 left-4">
                        <div className="w-3 h-3 bg-white rounded-full relative">
                            <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-1 left-1"></div>
                            <div className="absolute -top-1 -left-1 w-1 h-1 border-l-2 border-t-2 border-gray-600 rounded-tl-full transform rotate-45"></div>
                        </div>
                    </div>
                    <div className="absolute top-5 right-4">
                        <div className="w-3 h-3 bg-white rounded-full relative">
                            <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-1 left-0.5"></div>
                            <div className="absolute -top-1 -right-1 w-1 h-1 border-r-2 border-t-2 border-gray-600 rounded-tr-full transform -rotate-45"></div>
                        </div>
                    </div>
                    {/* Closed sad mouth */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                        <div className="w-4 h-1 bg-gray-600 rounded-full transform rotate-12"></div>
                    </div>
                </>
            );
        }

        const mood = currentDialog.mood;

        return (
            <>
                {/* Eyes based on mood */}
                <div className="absolute top-5 left-4">
                    <div
                        className={`w-3 h-3 bg-white rounded-full relative ${
                            mood === "excited" ? "animate-pulse" : ""
                        }`}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 bg-black rounded-full absolute"
                            animate={{
                                x: mood === "excited" ? [1, 1.5, 1] : 1,
                                y: mood === "excited" ? [1, 0.5, 1] : 1,
                            }}
                            transition={{
                                duration: 0.5,
                                repeat:
                                    mood === "excited"
                                        ? Number.POSITIVE_INFINITY
                                        : 0,
                            }}
                        />
                        {mood === "excited" && (
                            <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                        )}
                    </div>
                </div>
                <div className="absolute top-5 right-4">
                    <div
                        className={`w-3 h-3 bg-white rounded-full relative ${
                            mood === "excited" ? "animate-pulse" : ""
                        }`}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 bg-black rounded-full absolute"
                            animate={{
                                x: mood === "excited" ? [0.5, 1, 0.5] : 0.5,
                                y: mood === "excited" ? [1, 0.5, 1] : 1,
                            }}
                            transition={{
                                duration: 0.5,
                                repeat:
                                    mood === "excited"
                                        ? Number.POSITIVE_INFINITY
                                        : 0,
                            }}
                        />
                        {mood === "excited" && (
                            <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                        )}
                    </div>
                </div>

                {/* Mouth based on mood */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                    {mood === "excited" && (
                        <motion.div
                            className="w-5 h-3 bg-white rounded-full relative"
                            animate={{ scaleY: [1, 1.2, 1] }}
                            transition={{
                                duration: 0.3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 1,
                            }}
                        >
                            <div className="absolute inset-1 bg-pink-300 rounded-full"></div>
                            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                        </motion.div>
                    )}
                    {mood === "friendly" && (
                        <div className="w-4 h-2 bg-white rounded-full relative">
                            <div className="absolute inset-0.5 bg-pink-200 rounded-full"></div>
                        </div>
                    )}
                    {mood === "enthusiastic" && (
                        <motion.div
                            className="w-4 h-4 bg-white rounded-full relative"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                duration: 0.4,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 0.8,
                            }}
                        >
                            <div className="absolute inset-1 bg-pink-300 rounded-full"></div>
                        </motion.div>
                    )}
                    {mood === "helpful" && (
                        <div className="w-3 h-2 bg-white rounded-full relative">
                            <div className="absolute inset-0.5 bg-pink-100 rounded-full"></div>
                        </div>
                    )}
                    {mood === "neutral" && (
                        <div className="w-3 h-1.5 bg-white rounded-full"></div>
                    )}
                </div>

                {/* Cheeks for excited mood */}
                {mood === "excited" && (
                    <>
                        <motion.div
                            className="absolute top-7 left-2 w-2 h-2 bg-pink-300 rounded-full opacity-60"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                                duration: 0.6,
                                repeat: Number.POSITIVE_INFINITY,
                            }}
                        />
                        <motion.div
                            className="absolute top-7 right-2 w-2 h-2 bg-pink-300 rounded-full opacity-60"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                                duration: 0.6,
                                repeat: Number.POSITIVE_INFINITY,
                            }}
                        />
                    </>
                )}
            </>
        );
    };

    return (
        <motion.div
            className="fixed right-2 bottom-0 -translate-y-1/2 z-50"
            initial={{ translateX: "200%", translateY: '500%' }}
            animate={{ translateX: 0, translateY: 0 }}
            transition={SpringTransition()}
            drag
            dragConstraints={{ top: -40 * window.innerHeight / 100, bottom: 0, left: 0, right: 0 }}
        >
            <div className="relative">
                {/* Speech Bubble - positioned at top-left */}
                <AnimatePresence mode="wait">
                    {!isMuted && (
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, scale: 0.8, x: 20, y: 10 }}
                            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: 20, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-0 top-0 -translate-y-[110%] -translate-x-10 pointer-events-none max-w-xs w-[30vw]"
                        >
                            <div className="relative bg-background text-foreground rounded-2xl shadow-xl border-2 border-foreground p-4">
                                {/* Speech bubble tail pointing to cartoon */}
                                <div className="absolute bottom-0 right-8 w-2 h-4 bg-foreground translate-y-full rotate-z-315"></div>

                                <div className="flex items-start gap-3">
                                    <p className="text-small leading-relaxed font-medium">
                                        {currentDialog.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mute Button */}
                <motion.button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`absolute -top-8 left-[50%] ${
                        isMuted
                            ? "bg-lgray hover:bg-lgray/80"
                            : "bg-blue hover:bg-blue/80"
                    } text-white  text-small px-3 py-1 rounded-full shadow-lg transition-colors pointer-events-auto font-bold`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isMuted ? (
                        <span className="flex items-center gap-1">
                            <VolumeX size={15} />
                        </span>
                    ) : (
                        <span className="flex items-center gap-1">
                            <Volume2 size={15} />
                        </span>
                    )}
                </motion.button>

                {/* Cartoon Character */}
                <motion.div
                    variants={characterVariants}
                    animate={isMuted ? "muted" : currentDialog.mood}
                    className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-skin relative overflow-hidden ${
                        isMuted
                            ? "bg-gradient-to-br from-gray-400 to-gray-600"
                            : "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
                    } shadow-xs shadow-dark`}
                >
                    {renderFace()}

                    {/* Hair/hat */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-t-full"></div>

                    {/* Body hint */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-blue-300 to-blue-400 rounded-t-full"></div>
                </motion.div>

                {/* Floating particles for excited mood */}
                <AnimatePresence>
                    {!isMuted && currentDialog.mood === "excited" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
                                    style={{
                                        left: `${10 + i * 15}%`,
                                        top: `${5 + i * 10}%`,
                                    }}
                                    animate={{
                                        y: [-15, -30, -15],
                                        x: [0, Math.sin(i) * 10, 0],
                                        opacity: [0, 1, 0],
                                        scale: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: i * 0.4,
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Sad particles when muted */}
                <AnimatePresence>
                    {isMuted && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ staggerChildren: 0.5 }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            <motion.div
                                className="absolute text-small"
                                style={{
                                    left: "25%",
                                    top: `40%`,
                                }}
                                animate={{
                                    y: [0, 20, 40],
                                    opacity: [1, 0.5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                }}
                            >
                                💧
                            </motion.div>

                            <motion.div
                                className="absolute text-small"
                                style={{
                                    left: "60%",
                                    top: `40%`,
                                }}
                                animate={{
                                    y: [0, 20, 40],
                                    opacity: [1, 0.5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                }}
                            >
                                💧
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
