"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#F5F5F7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-sm font-medium tracking-widest uppercase text-[#6E6E73] mb-6"
        >
          Skills &amp; Stack
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] mb-16"
        >
          Crafted with the right tools.
        </motion.h2>

        <div className="divide-y divide-[#D2D2D7]">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index * 0.05}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-center justify-between py-5 group"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-medium text-[#D2D2D7] w-6 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium text-[#1D1D1F] group-hover:text-[#6E6E73] transition-colors duration-200">
                  {skill}
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-white border border-[#D2D2D7] text-xs text-[#6E6E73] font-medium hidden sm:block">
                Expert
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
