"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function FloatingParticles() {
    // Avoid hydration mismatch by rendering only after mount
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        // Generate random particles
        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // vw
            y: Math.random() * 100, // vh
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 10,
            size: Math.random() * 4 + 2,
        }));
        setParticles(newParticles);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary/20 blur-[1px]"
                    initial={{ left: `${p.x}%`, top: `${p.y}%`, opacity: 0 }}
                    animate={{
                        y: [0, -100], // Move up
                        opacity: [0, 0.5, 0], // Fade in/out
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                    style={{
                        width: p.size,
                        height: p.size,
                        willChange: "transform",
                    }}
                />
            ))}
        </div>
    );
}
