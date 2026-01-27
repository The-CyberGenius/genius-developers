"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionTemplate, MotionValue } from "framer-motion";

export const Spotlight = ({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.25)",
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            onMouseMove={onMouseMove}
            className={`relative group overflow-hidden ${className}`}
        >
            <motion.div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 placeholder-opacity-0 group-hover:opacity-100 opacity-0"
                style={{ background: spotlightColor, ...style }}
            ></motion.div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export const CardSpotlight = ({
    children,
    className = "",
    color = "rgba(120, 119, 198, 0.1)",
}: {
    children: React.ReactNode;
    className?: string;
    color?: string;
}) => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`relative overflow-hidden group ${className}`}
            onMouseMove={onMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};
