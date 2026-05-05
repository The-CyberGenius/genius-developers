"use client";

import { motion } from "framer-motion";
import { Mail, Github, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F5F5F7]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-sm font-medium tracking-widest uppercase text-[#6E6E73] mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] mb-6 leading-tight"
        >
          Let&apos;s work
          <br />
          together.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg text-[#6E6E73] font-light max-w-[480px] mx-auto mb-14 leading-relaxed"
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you. Reach out through any of the channels below.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:sshivaprajapat@gmail.com"
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1D1D1F] text-white text-sm font-medium hover:bg-black transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <Mail className="w-4 h-4" />
            sshivaprajapat@gmail.com
          </a>

          <a
            href="https://github.com/The-CyberGenius"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#D2D2D7] text-[#1D1D1F] text-sm font-medium hover:border-[#1D1D1F] transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href="https://wa.me/918955256878?text=Hi%20Shiva%2C%20I%27d%20like%20to%20work%20together."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#D2D2D7] text-[#1D1D1F] text-sm font-medium hover:border-[#1D1D1F] transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
