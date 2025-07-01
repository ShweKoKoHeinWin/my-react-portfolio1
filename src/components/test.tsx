<AnimatePresence>
                        {open &&
                            lanterns.map((lantern, i) => (
                                <motion.div
                                    key={lantern.id}
                                    initial={{
                                        scale: 0,
                                        opacity: 0,
                                        y: -20,
                                    }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{
                                        scale: 0,
                                        opacity: 0,
                                        y: -i * 104, // Pull each lantern up to the top position (104px = lantern height + gap)
                                        transition: {
                                            delay: i * 0.1, // Staggered exit from top to bottom
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        },
                                    }}
                                    transition={{
                                        delay: open ? 0.2 * i : 0, // Staggered entrance
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20,
                                    }}
                                    className="relative cursor-pointer group"
                                    onClick={() => {
                                        // Handle navigation here
                                        console.log(
                                            `Navigate to ${lantern.name}`
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {/* String line */}
                                    <motion.div
                                        className="absolute top-[-32px] left-1/2 w-[2px] h-8 bg-yellow-400 -translate-x-1/2"
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        exit={{
                                            scaleY: 0,
                                            transition: {
                                                delay: i * 0.1 + 0.2, // String disappears after lantern starts moving
                                                duration: 0.2,
                                            },
                                        }}
                                        transition={{
                                            delay: open
                                                ? 0.2 * i + 0.1
                                                : i * 0.1,
                                        }}
                                        style={{ transformOrigin: "top" }}
                                    />

                                    {/* Lantern Body */}
                                    <motion.div
                                        className="relative w-20 h-20 rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-[0_0_30px_rgba(239,68,68,0.6)] ring-2 ring-yellow-400 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-shadow duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Inner glow */}
                                        <div className="absolute inset-2 rounded-full bg-gradient-to-b from-red-400 to-red-600 opacity-80" />

                                        {/* Navigation text */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-yellow-100 text-xs font-bold text-center leading-tight">
                                                {lantern.name}
                                            </span>
                                        </div>

                                        {/* Decorative pattern */}
                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-yellow-400 rounded-full opacity-60" />
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-yellow-400 rounded-full opacity-60" />
                                    </motion.div>

                                    {/* Tassel */}
                                    <motion.div
                                        className="absolute bottom-[-16px] left-1/2 w-[6px] h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 -translate-x-1/2 rounded-sm"
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        exit={{
                                            scaleY: 0,
                                            transition: {
                                                delay: i * 0.1 + 0.15,
                                                duration: 0.2,
                                            },
                                        }}
                                        transition={{
                                            delay: open
                                                ? 0.2 * i + 0.15
                                                : i * 0.1 + 0.05,
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
                                                delay: i * 0.1 + 0.1,
                                                duration: 0.2,
                                            },
                                        }}
                                        transition={{
                                            delay: open
                                                ? 0.2 * i + 0.2
                                                : i * 0.1,
                                        }}
                                    >
                                        {[...Array(5)].map((_, j) => (
                                            <div
                                                key={j}
                                                className="w-[1px] h-3 bg-yellow-500"
                                                style={{
                                                    height: `${
                                                        8 + Math.random() * 4
                                                    }px`,
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                </motion.div>
                            ))}
                    </AnimatePresence>