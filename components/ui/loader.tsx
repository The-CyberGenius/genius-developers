"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: loading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
        >
            <div className="flex flex-col items-center gap-4">
                <div className="relative flex items-center gap-1">
                    {["G", "E", "N", "I", "U", "S"].map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 2,
                            }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter"
                            style={{
                                textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-xs text-muted-foreground tracking-[0.5em] uppercase"
                >
                    Initializing
                </motion.p>
            </div>
        </motion.div>
    );
};
