"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* 1. Moving Cyber Grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, white 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, white 40%, transparent 100%)'
                }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"
                    animate={{
                        translateY: [0, 40]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear"
                    }}
                />
            </div>

            {/* 2. Nebula Glows (Animated Orbs) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[128px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[128px]"
            />

            <motion.div
                animate={{
                    x: [0, 100, 0],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[96px]"
            />
        </div>
    );
}
