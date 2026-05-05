"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "100%", label: "Client Satisfaction" },
];

function MonogramAvatar() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer ring */}
        <circle cx="160" cy="160" r="155" stroke="#D2D2D7" strokeWidth="1" fill="none" />
        {/* Inner filled circle */}
        <circle cx="160" cy="160" r="140" fill="#F5F5F7" />
        {/* Inner subtle ring */}
        <circle cx="160" cy="160" r="125" stroke="#D2D2D7" strokeWidth="0.5" fill="none" />
        {/* Monogram S */}
        <text
          x="160"
          y="205"
          textAnchor="middle"
          fontSize="150"
          fontWeight="300"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
          fill="#1D1D1F"
          letterSpacing="-4"
        >
          S
        </text>
        {/* Bottom arc label */}
        <path id="bottomArc" d="M 65,200 A 100,100 0 0,0 255,200" fill="none" />
        <text
          fontSize="11"
          fill="#6E6E73"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
          letterSpacing="6"
          fontWeight="400"
        >
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            SHIVA
          </textPath>
        </text>
        {/* Cardinal dot markers */}
        <circle cx="160" cy="5" r="3" fill="#D2D2D7" />
        <circle cx="160" cy="315" r="3" fill="#D2D2D7" />
        <circle cx="5" cy="160" r="3" fill="#D2D2D7" />
        <circle cx="315" cy="160" r="3" fill="#D2D2D7" />
        {/* Availability dot */}
        <circle cx="265" cy="255" r="12" fill="white" stroke="#D2D2D7" strokeWidth="1.5" />
        <circle cx="265" cy="255" r="7" fill="#22C55E" />
      </svg>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-sm font-medium tracking-widest uppercase text-[#6E6E73] mb-16"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text + Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
              Building things that matter.
            </h2>
            <p className="text-lg text-[#6E6E73] leading-relaxed font-light">
              I&apos;m a Senior Full-Stack Developer with 5+ years of experience
              turning complex ideas into clean, production-ready products. I care
              deeply about performance, accessibility, and the details that
              separate good from great.
            </p>
            <p className="text-lg text-[#6E6E73] leading-relaxed font-light">
              My stack centers on React, Next.js, and TypeScript — but I&apos;m
              equally comfortable deep in a Node.js API, crafting a database
              schema, or tuning Lighthouse scores until they&apos;re perfect.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-0 pt-4 border-t border-[#D2D2D7]">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`py-6 ${i > 0 ? "border-l border-[#D2D2D7] pl-6" : ""}`}
                >
                  <p className="text-3xl font-bold text-[#1D1D1F]">{s.value}</p>
                  <p className="text-sm text-[#6E6E73] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Monogram Avatar */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center"
          >
            <MonogramAvatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
