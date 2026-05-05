"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-[860px] mx-auto space-y-6"
      >
        {/* Availability badge */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D2D2D7] text-xs font-medium text-[#6E6E73] bg-white">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]"
        >
          Hi, I&apos;m Shiva.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl font-light text-[#6E6E73] max-w-[620px] mx-auto leading-relaxed"
        >
          Senior Full-Stack Developer crafting elegant digital experiences with
          React, Next.js &amp; TypeScript.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#work"
            className="px-7 py-3 rounded-full bg-[#1D1D1F] text-white text-sm font-medium hover:bg-black transition-colors duration-200 w-full sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-[#D2D2D7] text-[#1D1D1F] text-sm font-medium hover:border-[#6E6E73] transition-colors duration-200 w-full sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#D2D2D7] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#D2D2D7] to-transparent" />
      </motion.div>
    </section>
  );
}
