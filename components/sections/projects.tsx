"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group bg-[#F5F5F7] rounded-[18px] border border-[#D2D2D7] overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#E8E8ED]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <p className="text-xs font-medium text-[#6E6E73] uppercase tracking-widest">
          {project.category}
        </p>
        <h3 className="text-xl font-semibold text-[#1D1D1F]">{project.title}</h3>
        <p className="text-sm text-[#6E6E73] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white border border-[#D2D2D7] text-xs text-[#6E6E73] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.links?.work && (
          <a
            href={project.links.work}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#1D1D1F] hover:text-[#6E6E73] transition-colors mt-2 w-fit"
          >
            Visit Site <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-medium tracking-widest uppercase text-[#6E6E73] mb-6"
        >
          Selected Work
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F]"
          >
            Things I&apos;ve built.
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            href="https://github.com/The-CyberGenius"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors underline underline-offset-4 decoration-[#D2D2D7] shrink-0"
          >
            View GitHub →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
