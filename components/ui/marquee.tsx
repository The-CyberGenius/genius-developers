"use client";

import { motion } from "framer-motion";

const items = [
    "WEB DEVELOPMENT",
    "APP DEVELOPMENT",
    "UI/UX DESIGN",
    "SEO OPTIMIZATION",
    "DIGITAL MARKETING",
    "CONSULTING",
];

export function Marquee() {
    return (
        <div className="w-full bg-primary/10 border-y border-white/5 py-4 overflow-hidden relative z-20">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex gap-8 items-center"
                >
                    {[...items, ...items, ...items, ...items].map((item, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-sm md:text-base font-bold tracking-widest text-primary/70">
                                {item}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
