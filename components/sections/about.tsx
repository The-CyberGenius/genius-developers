"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = [
    "React & Next.js",
    "TypeScript",
    "Node.js & Express",
    "TailwindCSS",
    "Framer Motion",
    "Database Design (SQL/NoSQL)",
    "Cloud Deployment (Vercel/AWS)",
    "SEO Optimization",
];

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
                            More Than Just Code
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
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="text-6xl font-bold text-primary mb-2">3+</div>
                                    <div className="text-xl text-muted-foreground">Years Experience</div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-10 right-10 w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-pulse" />
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
