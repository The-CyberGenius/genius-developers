"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
    "/assets/app_images/apno_studio.png",
    "/assets/app_images/professor_adda.png",
    "/assets/app_images/luxe_aether.png",
    "/assets/app_images/orbital_flow.png",
    "/assets/app_images/nexus_health.png",
];

export function ProjectSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={projects[currentIndex]}
                        alt="Project Screenshot"
                        fill
                        className="object-cover"
                    />
                    {/* Gradient Overlay for better text contrast if needed, or just aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg z-10">
                <p className="text-sm font-bold text-primary">Latest Work</p>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-6 left-6 flex gap-2 z-10">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-4" : "bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
