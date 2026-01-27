"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GlitchText } from "@/components/ui/glitch-text";

import { ProjectSlideshow } from "@/components/ui/project-slideshow";

import { skills } from "@/data/skills";

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-secondary/5 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            <GlitchText text="More Than Just Code" />
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            We are a team of passionate developers and designers dedicated to building digital products that stand out. With a focus on performance, aesthetics, and scalability, we turn complex problems into elegant solutions.
                        </p>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Whether you need a high-converting landing page, a complex web application, or a complete digital transformation, we have the expertise to make it happen.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="font-medium text-foreground">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual/Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[400px] w-full"
                    >
                        <ProjectSlideshow />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
